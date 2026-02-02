using IncidentAtlas.Domain.Entities;
using IncidentAtlas.Domain.Enums;
using Xunit;

public sealed class IncidentAppendEventTests
{
    [Fact]
    public void AppendEvent_increments_sequence()
    {
        var incident = Incident.Start(
            title: "Payments failing",
            severity: IncidentSeverity.Sev1,
            occurredAtUtc: DateTimeOffset.UtcNow,
            details: null,
            createdBy: "oncall"
        );

        var e2 = incident.AppendEvent(
            type: IncidentEventType.NoteAdded,
            occurredAtUtc: DateTimeOffset.UtcNow,
            title: "Investigating",
            details: "Looking at logs",
            createdBy: "ethan"
        );

        var e3 = incident.AppendEvent(
            type: IncidentEventType.NoteAdded,
            occurredAtUtc: DateTimeOffset.UtcNow,
            title: "Mitigation applied",
            details: null,
            createdBy: "ethan"
        );

        Assert.Equal(2, e2.Sequence);
        Assert.Equal(3, e3.Sequence);
        Assert.Equal(3, incident.Events.Count);
    }

    [Fact]
    public void AppendEvent_updates_status_when_resolved()
    {
        var incident = Incident.Start(
            title: "Payments failing",
            severity: IncidentSeverity.Sev1,
            occurredAtUtc: DateTimeOffset.UtcNow,
            details: null,
            createdBy: "oncall"
        );

        incident.AppendEvent(
            type: IncidentEventType.Resolved,
            occurredAtUtc: DateTimeOffset.UtcNow,
            title: "Resolved",
            details: "Rollback complete",
            createdBy: "ethan"
        );

        Assert.Equal(IncidentStatus.Resolved, incident.Status);
    }
}

