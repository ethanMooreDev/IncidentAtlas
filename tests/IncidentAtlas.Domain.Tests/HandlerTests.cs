using IncidentAtlas.Application.Commands;
using IncidentAtlas.Application.Handlers;
using IncidentAtlas.Domain.Entities;
using IncidentAtlas.Domain.Enums;

namespace IncidentAtlas.Domain.Tests;

public sealed class HandlerTests
{
    [Fact]
    public async Task CreateIncidentHandler_returns_new_incident_id_and_persists()
    {
        var repository = new FakeIncidentRepository();

        var createIncidentHandler = new CreateIncidentHandler(repository);

        var ct = new CancellationToken();

        var incidentId = await createIncidentHandler.Handle(new CreateIncidentCommand(
            Title: "Orders not processing",
            Severity: IncidentSeverity.Sev1,
            OccurredAtUtc: DateTime.UtcNow,
            Details: "Spike in 5xx errors",
            CreatedBy: "oncall"
        ), ct);

        var resultIncident = repository.GetByIdAsync(incidentId);

        Assert.NotNull(resultIncident);
    }

    [Fact]
    public async Task AppendIncidentEventHandler_appends_event()
    {
        var repository = new FakeIncidentRepository();

        var createIncidentHandler = new CreateIncidentHandler(repository);
        var appendIncidentHandler = new AppendIncidentEventHandler(repository);

        var ct = new CancellationToken();

        var incidentId = await createIncidentHandler.Handle(new CreateIncidentCommand(
            Title: "Orders not processing",
            Severity: IncidentSeverity.Sev1,
            OccurredAtUtc: DateTime.UtcNow,
            Details: "Spike in failed order transactions",
            CreatedBy: "oncall"
        ), ct);

        await appendIncidentHandler.Handle(new AppendIncidentEventCommand(
            IncidentId: incidentId,
            Type: IncidentEventType.StatusChanged,
            OccurredAt: DateTime.UtcNow,
            Title: "Initial Assessment",
            Details: "Spike in 5xx errors",
            CreatedBy: "Ethan"
        ), ct);

        var incident = await repository.GetByIdAsync(incidentId);

        Assert.NotNull(incident);

        Assert.Equal(2, incident.Events.Count);
    }


    [Fact]
    public async Task AppendIncidentEventHandler_throws_when_missing()
    {
        var repository = new FakeIncidentRepository();

        var appendIncidentHandler = new AppendIncidentEventHandler(repository);

        var ct = new CancellationToken();

        await Assert.ThrowsAsync<InvalidOperationException>(async () =>
        {
            await appendIncidentHandler.Handle(new AppendIncidentEventCommand(
                IncidentId: Guid.NewGuid(),
                Type: IncidentEventType.StatusChanged,
                OccurredAt: DateTime.UtcNow,
                Title: "Initial Assessment",
                Details: "Spike in 5xx errors",
                CreatedBy: "Ethan"
            ), ct);
        });
    }
}
