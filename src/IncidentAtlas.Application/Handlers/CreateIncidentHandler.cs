using IncidentAtlas.Application.Commands;
using IncidentAtlas.Application.Interfaces;
using IncidentAtlas.Domain.Entities;

namespace IncidentAtlas.Application.Handlers;

public sealed class CreateIncidentHandler
{
    private readonly IIncidentRepository _repository;

    public CreateIncidentHandler(IIncidentRepository repository)
    {
        _repository = repository;
    }

    public async Task<Guid> Handle(
        CreateIncidentCommand command,
        CancellationToken cancellationToken
    )
    {
        var incident = Incident.Start(
            command.Title,
            command.Severity,
            command.OccurredAtUtc,
            command.Details,
            command.CreatedBy
        );

        await _repository.AddAsync(incident, cancellationToken);

        return incident.IncidentId;
    }
}
