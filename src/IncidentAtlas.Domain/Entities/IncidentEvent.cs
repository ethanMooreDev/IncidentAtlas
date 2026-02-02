

using IncidentAtlas.Domain.Enums;

namespace IncidentAtlas.Domain.Entities;

public class IncidentEvent
{
    public Guid IncidentEventId { get; init; }

    public Guid IncidentId { get; init; }
    public int Sequence { get; init; }
    public DateTimeOffset OccurredAtUtc { get; init; }
    public IncidentEventType Type { get; init; }
    public string Title { get; init; } = string.Empty;
    public string? Details { get; init; }
    public string? CreatedBy { get; init; }
    public string? Source { get; init; }

    internal IncidentEvent(
        Guid incidentEventId,
        Guid incidentId,
        int sequence,
        DateTimeOffset occurredAtUtc,
        IncidentEventType type,
        string title,
        string? details,
        string? createdBy,
        string? source
    )
    {
        IncidentEventId = incidentEventId;
        IncidentId = incidentId;
        Sequence = sequence;
        OccurredAtUtc = occurredAtUtc;
        Type = type;
        Title = title;
        Details = details;
        CreatedBy = createdBy;
        Source = source;
    }

}
