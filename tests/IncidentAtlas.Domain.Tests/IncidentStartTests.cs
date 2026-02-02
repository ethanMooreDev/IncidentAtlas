using IncidentAtlas.Domain.Entities;
using IncidentAtlas.Domain.Enums;
using Xunit;

namespace IncidentAtlas.Domain.Tests;

public class IncidentStartTests
{
    [Fact]
    public void Start_creates_initial_event_with_sequence_1()
    {
        var incident = Incident.Start(
            title: "Payments failing",
            severity: IncidentSeverity.Sev1,
            occurredAtUtc: DateTime.UtcNow,
            details: "Spike in 5xx errors",
            createdBy: "oncall"
        );

        Assert.NotEqual(Guid.Empty, incident.IncidentId);
        Assert.NotEmpty(incident.Events);

        var first = incident.Events[0];
        Assert.Equal(1, first.Sequence);
        Assert.Equal(incident.IncidentId, first.IncidentId);
        Assert.Equal(IncidentEventType.IncidentDeclared, first.Type);
    }

    [Fact]
    public void Start_throws_when_title_is_blank()
    {
        Assert.Throws<ArgumentException>(() =>
            Incident.Start(
                title: "  ",
                severity: IncidentSeverity.Sev2,
                occurredAtUtc: DateTime.UtcNow,
                details: null,
                createdBy: null
            )
        );
    }
}
