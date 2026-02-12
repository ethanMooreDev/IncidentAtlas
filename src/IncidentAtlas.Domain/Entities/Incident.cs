

using IncidentAtlas.Domain.Enums;

namespace IncidentAtlas.Domain.Entities;

public class Incident
{
    public Guid IncidentId { get; private set; }

    public string Title { get; private set; } = String.Empty;
    public IncidentSeverity Severity { get; private set; }
    public IncidentStatus Status { get; private set; }
    public DateTimeOffset CreatedAtUtc { get; private set; }

    private readonly List<IncidentEvent> _events = new();
    public IReadOnlyList<IncidentEvent> Events => _events;
    public byte[] RowVersion { get; private set; } = Array.Empty<byte>();


    private Incident(
        Guid incidentId,
        string title,
        IncidentSeverity severity,
        DateTimeOffset createdAtUtc
    )
    {
        IncidentId = incidentId;
        Title = title;
        Severity = severity;
        Status = IncidentStatus.Active;
        CreatedAtUtc = createdAtUtc;
    }

    private Incident(
        Guid incidentId,
        string title,
        IncidentSeverity severity,
        IncidentStatus incidentStatus,
        DateTimeOffset createdAtUtc,
        IReadOnlyList<IncidentEvent> events
    )
    {
        IncidentId = incidentId;
        Title = title;
        Severity = severity;
        Status = incidentStatus;
        CreatedAtUtc = createdAtUtc;
        _events = events.ToList();
    }

    public static Incident Start(
        string title,
        IncidentSeverity severity,
        DateTimeOffset occurredAtUtc,
        string? details,
        string? createdBy
    )
    {
        if(string.IsNullOrWhiteSpace( title ))
        {
            throw new ArgumentException("Incident title is required.", nameof(title));
        }

        var incidentId = Guid.NewGuid();
        var eventId = Guid.NewGuid();

        var initialEvent = new IncidentEvent(
            incidentEventId: eventId,
            incidentId: incidentId,
            sequence: 1,
            occurredAtUtc: occurredAtUtc,
            type: IncidentEventType.IncidentDeclared,
            title: title,
            details: details,
            createdBy: createdBy,
            source: null
        );

        return new Incident(
            incidentId: incidentId,
            title: title,
            severity: severity,
            incidentStatus: IncidentStatus.Active,
            createdAtUtc: occurredAtUtc,
            events: new List<IncidentEvent> { initialEvent }
        );
    }

    public IncidentEvent AppendEvent(
        string title,
        IncidentEventType type,
        DateTimeOffset occurredAtUtc,
        string? details,
        string? createdBy
    )
    {
        var incidentEventId = Guid.NewGuid();

        var incidentEvent = new IncidentEvent(
            incidentEventId: incidentEventId,
            incidentId: IncidentId,
            sequence: Events.Count + 1,
            occurredAtUtc: occurredAtUtc,
            type: type,
            title: title,
            details: details,
            createdBy: createdBy,
            source: null
        );

        _events.Add(incidentEvent);

        switch(type)
        {
            case IncidentEventType.Mitigated: 
                Status = IncidentStatus.Mitigated;
                break;
            case IncidentEventType.Resolved:
                Status = IncidentStatus.Resolved;
                break;
            case IncidentEventType.Reopened:
                Status = IncidentStatus.Active;
                break;
        }

        return incidentEvent;
    }
}
