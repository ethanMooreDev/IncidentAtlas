namespace IncidentAtlas.Infrastructure.AI;

public static class AiSchemas
{
    // Shared citation schema definition (inline helper pattern)
    private static object CitationItemSchema => new
    {
        type = "object",
        additionalProperties = false,
        properties = new
        {
            incidentEventId = new { type = "string" },
            sequence = new { type = "integer" },
            quote = new { type = new[] { "string", "null" } },
            reason = new { type = new[] { "string", "null" } }
        },
        required = new[]
        {
            "incidentEventId",
            "sequence",
            "quote",
            "reason"
        }
    };

    public static BinaryData SummaryResult => BinaryData.FromObjectAsJson(new
    {
        type = "object",
        additionalProperties = false,
        properties = new
        {
            summaryMarkdown = new { type = "string" },

            citations = new
            {
                type = "array",
                items = CitationItemSchema
            }
        },
        required = new[]
        {
            "summaryMarkdown",
            "citations"
        }
    });

    public static BinaryData PostmortemDraftResult => BinaryData.FromObjectAsJson(new
    {
        type = "object",
        additionalProperties = false,
        properties = new
        {
            draftMarkdown = new { type = "string" },

            citations = new
            {
                type = "array",
                items = CitationItemSchema
            }
        },
        required = new[]
        {
            "draftMarkdown",
            "citations"
        }
    });
}