using IncidentAtlas.Application.Abstractions;
using IncidentAtlas.Application.AI.Commands;
using IncidentAtlas.Application.Exceptions;
using IncidentAtlas.Application.Interfaces;

namespace IncidentAtlas.Application.AI.Handlers;

public sealed class PublishPostmortemHandler
{
    private readonly IIncidentReadStore _readStore;
    private readonly IPostmortemPublishStore _publishStore;
    private readonly IIncidentRepository _incidentRepository;

    public PublishPostmortemHandler(
        IIncidentReadStore readStore,
        IPostmortemPublishStore publishStore,
        IIncidentRepository incidentRepository)
    {
        _readStore = readStore;
        _publishStore = publishStore;
        _incidentRepository = incidentRepository;
    }

    public async Task<Guid> Handle(PublishPostmortemCommand command, CancellationToken ct)
    {
        var incidentDetail = await _readStore.GetIncidentDetailAsync(command.IncidentId, ct);
        if (incidentDetail is null)
            throw new InvalidOperationException("Incident not found.");

        var currentMaxSequence = incidentDetail.Events.Count == 0 ? 0 : incidentDetail.Events.Max(e => e.Sequence);
        if (currentMaxSequence != command.InputEventSequenceMax)
        {
            // Strict staleness rule.
            throw new ConcurrencyConflictException("Incident changed since preview. Regenerate before publishing.");
        }

        // Validate citations all belong to this incident
        var eventIdSet = incidentDetail.Events.Select(e => e.IncidentEventId).ToHashSet();
        foreach (var c in command.Citations)
        {
            if (!eventIdSet.Contains(c.IncidentEventId))
                throw new InvalidOperationException("One or more citations do not belong to this incident.");
        }

        var publishedAtUtc = DateTimeOffset.UtcNow;

        // Save the published postmortem record
        var publishedPostmortemId = await _publishStore.SavePublishedPostmortemAsync(
            incidentId: command.IncidentId,
            contentMarkdown: command.ContentMarkdown,
            citations: command.Citations,
            inputEventSequenceMax: command.InputEventSequenceMax,
            model: command.Model,
            generatedAtUtc: command.GeneratedAtUtc,
            publishedAtUtc: publishedAtUtc,
            publishedBy: command.PublishedBy,
            ct: ct);

        // Append a timeline event that points to it
        var incident = await _incidentRepository.GetByIdAsync(command.IncidentId, ct);
        if (incident is null)
            throw new InvalidOperationException("Incident not found.");

        var title = "Postmortem published";
        var details = $"PublishedPostmortemId: {publishedPostmortemId}";

        var ev = incident.AppendEvent(
            title: title,
            type: Domain.Enums.IncidentEventType.NoteAdded,
            occurredAtUtc: publishedAtUtc,
            details: details,
            createdBy: command.PublishedBy
        );

        await _incidentRepository.AddEventAsync(ev, ct);
        await _incidentRepository.SaveChangesAsync(ct);

        return publishedPostmortemId;
    }
}
