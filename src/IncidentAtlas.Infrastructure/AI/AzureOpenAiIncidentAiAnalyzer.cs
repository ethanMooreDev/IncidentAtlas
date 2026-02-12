using Azure;
using Azure.AI.OpenAI;
using IncidentAtlas.Application.AI.Models;
using IncidentAtlas.Application.Interfaces;
using IncidentAtlas.Application.ReadModels;
using IncidentAtlas.Domain.Enums;
using Microsoft.Extensions.Options;
using OpenAI.Chat;
using System.Text.Json;

namespace IncidentAtlas.Infrastructure.AI;

internal sealed record IncidentAiInput(
    Guid IncidentId,
    string Title,
    string Severity,
    string Status,
    DateTimeOffset CreatedAtUtc,
    int InputEventSequenceMax,
    IReadOnlyList<IncidentAiEventInput> Events
);

internal sealed record IncidentAiEventInput(
    Guid IncidentEventId,
    int Sequence,
    DateTimeOffset OccurredAtUtc,
    string Type,
    string Title,
    string? Details,
    string? CreatedBy
);

public sealed class AzureOpenAiIncidentAiAnalyzer : IIncidentAiAnalyzer
{
    private static readonly JsonSerializerOptions JsonOptions = new(JsonSerializerDefaults.Web);

    private readonly ChatClient _chatClient;
    private readonly string _deploymentName;

    public AzureOpenAiIncidentAiAnalyzer(IOptions<AzureOpenAiOptions> options)
    {
        _deploymentName = options.Value.Deployment;

        var endpoint = new Uri(options.Value.Endpoint);
        var credential = new AzureKeyCredential(options.Value.ApiKey);

        var azureOpenAIClient = new AzureOpenAIClient(endpoint, credential);
        _chatClient = azureOpenAIClient.GetChatClient(_deploymentName);
    }

    public async Task<AiSummaryResult> SummarizeAsync(IncidentDetailDto incident, CancellationToken ct)
    {
        var input = BuildInput(incident);
        var inputJson = JsonSerializer.Serialize(input, JsonOptions);

        var messages = new List<ChatMessage>
        {
            new SystemChatMessage(
                "You are an incident analysis assistant. " +
                "Use ONLY the provided incident data. " +
                "Return ONLY a JSON object that matches the provided JSON schema. " +
                "Citations must reference provided sequence values in the format [sequence], without (), but not incidentEventId."),
            new UserChatMessage(
                "Generate a concise incident summary for an on-call engineer.\n" +
                "Include: current status, impact (if inferable from events), key timeline points.\n" +
                "Every significant statement must be supported by citations.\n" + "" +
                "If a cause is not explicitly confirmed in the incident events, phrase it as a hypothesis and cite the event that suggests it.\n\n" +
                "INCIDENT_DATA_JSON:\n" + inputJson)
        };

        var responseText = await CompleteWithSchemaAsync(
            messages,
            schemaName: "incident_summary",
            schema: AiSchemas.SummaryResult,
            ct);

        var parsed = DeserializeOrThrow<SummarySchemaOut>(responseText);

        var validatedCitations = ValidateCitations(parsed.Citations ?? [], input);

        return new AiSummaryResult(
            SummaryMarkdown: parsed.SummaryMarkdown ?? string.Empty,
            Citations: validatedCitations,
            Model: _deploymentName,
            GeneratedAtUtc: DateTimeOffset.UtcNow,
            InputEventSequenceMax: input.InputEventSequenceMax
        );
    }

    public async Task<AiPostmortemDraftResult> DraftPostmortemAsync(IncidentDetailDto incident, CancellationToken ct)
    {
        var input = BuildInput(incident);
        var inputJson = JsonSerializer.Serialize(input, JsonOptions);

        var messages = new List<ChatMessage>
        {
            new SystemChatMessage(
                "You are an incident analysis assistant. " +
                "Use ONLY the provided incident data. " +
                "Return ONLY a JSON object that matches the provided JSON schema. " +
                "Citations must reference provided incidentEventId values."),
            new UserChatMessage(
                "Generate a postmortem DRAFT (markdown) with sections:\n" +
                "1) Summary\n2) Impact\n3) Timeline\n4) Root cause hypothesis\n5) Contributing factors\n" +
                "6) What went well\n7) What didn't\n8) Action items (draft)\n\n" +
                "Every significant statement must be supported by citations.\n\n" +
                "INCIDENT_DATA_JSON:\n" + inputJson)
        };

        var responseText = await CompleteWithSchemaAsync(
            messages,
            schemaName: "incident_postmortem_draft",
            schema: AiSchemas.PostmortemDraftResult,
            ct);

        var parsed = DeserializeOrThrow<PostmortemSchemaOut>(responseText);

        var validatedCitations = ValidateCitations(parsed.Citations ?? [], input);

        return new AiPostmortemDraftResult(
            DraftMarkdown: parsed.DraftMarkdown ?? string.Empty,
            Citations: validatedCitations,
            GeneratedAtUtc: DateTimeOffset.UtcNow,
            InputEventSequenceMax: input.InputEventSequenceMax,
            Model: _deploymentName
        );
    }

    // -----------------------
    // Core helpers (tricky parts)
    // -----------------------

    private async Task<string> CompleteWithSchemaAsync(
        IReadOnlyList<ChatMessage> messages,
        string schemaName,
        BinaryData schema,
        CancellationToken ct)
    {
        // IMPORTANT:
        // - structured outputs require additionalProperties:false on objects
        // - avoid unsupported keywords like format/minimum in schema when strict mode is true
        //   (Azure structured outputs supports only a subset of JSON Schema). :contentReference[oaicite:6]{index=6}
        //
        // API surface varies by package version. This is the common pattern:
        // ChatResponseFormat.CreateJsonSchemaFormat(name, schema, jsonSchemaIsStrict: true)
        // If your SDK doesn't expose jsonSchemaIsStrict, you can still use JSON mode and validate yourself.
        var options = new ChatCompletionOptions
        {
            Temperature = 0.2f,
            ResponseFormat = ChatResponseFormat.CreateJsonSchemaFormat(
                jsonSchemaFormatName: schemaName,
                jsonSchema: schema,
                jsonSchemaIsStrict: true)
        };

        var result = await _chatClient.CompleteChatAsync(messages, options, ct);

        // Most SDK shapes expose the assistant content as text. If yours differs, adapt here.
        return result.Value.Content[0].Text;
    }

    private static T DeserializeOrThrow<T>(string json)
    {
        try
        {
            var value = JsonSerializer.Deserialize<T>(json, JsonOptions);
            if (value is null) throw new InvalidOperationException("AI returned empty JSON.");
            return value;
        }
        catch (JsonException ex)
        {
            throw new InvalidOperationException("AI returned invalid JSON.", ex);
        }
    }

    private static IReadOnlyList<Citation> ValidateCitations(
        IReadOnlyList<Citation> citations,
        IncidentAiInput input)
    {
        // Map eventId -> sequence from the ground truth input
        var map = input.Events.ToDictionary(e => e.IncidentEventId, e => e.Sequence);

        var validated = new List<Citation>(citations.Count);

        foreach (var c in citations)
        {
            if (!map.TryGetValue(c.IncidentEventId, out var seq))
                continue; // drop hallucinated references

            // enforce correct sequence (don’t trust model)
            validated.Add(c with { Sequence = seq });
        }

        return validated;
    }

    private static IncidentAiInput BuildInput(IncidentDetailDto incident)
    {
        var orderedEvents = incident.Events
            .OrderBy(e => e.Sequence)
            .Select(e => new IncidentAiEventInput(
                IncidentEventId: e.IncidentEventId,
                Sequence: e.Sequence,
                OccurredAtUtc: e.OccurredAtUtc,
                Type: e.Type.ToString(),
                Title: e.Title,
                Details: e.Details,
                CreatedBy: e.CreatedBy
            ))
            .ToList();

        var maxSeq = orderedEvents.Count == 0 ? 0 : orderedEvents.Max(e => e.Sequence);

        return new IncidentAiInput(
            IncidentId: incident.IncidentId,
            Title: incident.Title,
            Severity: incident.Severity.ToString(),
            Status: incident.Status.ToString(),
            CreatedAtUtc: incident.CreatedAtUtc,
            InputEventSequenceMax: maxSeq,
            Events: orderedEvents
        );
    }

    // Schema DTOs (match your AiSchemas output)
    private sealed class SummarySchemaOut
    {
        public string? SummaryMarkdown { get; set; }
        public List<Citation>? Citations { get; set; }
    }

    private sealed class PostmortemSchemaOut
    {
        public string? DraftMarkdown { get; set; }
        public List<Citation>? Citations { get; set; }
    }
}

//public sealed class AzureOpenAiIncidentAiAnalyzer : IIncidentAiAnalyzer
//{
//    private AzureOpenAIClient _azureOpenAIClient;
//    private ChatClient _chatClient;

//    private AzureOpenAiOptions _options;

//    public AzureOpenAiIncidentAiAnalyzer(IOptions<AzureOpenAiOptions> options)
//    {
//        var endpoint = new Uri(options.Value.Endpoint);
//        var credential = new AzureKeyCredential(options.Value.ApiKey);

//        _azureOpenAIClient = new AzureOpenAIClient(
//            endpoint,
//            credential
//        );
//        _chatClient = _azureOpenAIClient.GetChatClient(options.Value.Deployment);

//        _options = options.Value;
//    }

//    public Task<AiPostmortemDraftResult> DraftPostmortemAsync(IncidentDetailDto incident, CancellationToken ct)
//    {
//        throw new NotImplementedException();
//    }

//    public Task<AiSummaryResult> SummarizeAsync(IncidentDetailDto incident, CancellationToken ct)
//    {
//        throw new NotImplementedException();
//    }

//    private IncidentAiInput MakeJsonFriendly(IncidentDetailDto incidentDto)
//    {
//        var incidentEvents = new List<IncidentAiEventInput>();

//        foreach(var e in incidentDto.Events)
//        {
//            incidentEvents.Add(new IncidentAiEventInput(
//                e.IncidentEventId,
//                e.Sequence,
//                e.OccurredAtUtc,
//                Enum.GetName(typeof(IncidentEventType), e.Type)!,
//                e.Title,
//                e.Details,
//                e.CreatedBy
//            ));
//        }

//        var incident = new IncidentAiInput(
//            incidentDto.IncidentId,
//            incidentDto.Title,
//            Enum.GetName(typeof(IncidentSeverity), incidentDto.Severity)!,
//            Enum.GetName(typeof(IncidentStatus), incidentDto.Status)!,
//            incidentDto.CreatedAtUtc,
//            incidentEvents.Max(e => e.Sequence),
//            incidentEvents
//        );

//        return incident;
//    }
//}