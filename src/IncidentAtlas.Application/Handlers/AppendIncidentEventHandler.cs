using IncidentAtlas.Application.Commands;
using IncidentAtlas.Application.Interfaces;

namespace IncidentAtlas.Application.Handlers;

public sealed class AppendIncidentEventHandler
{
    private readonly IIncidentRepository _repository;

    public AppendIncidentEventHandler(IIncidentRepository repository)
    {
        _repository = repository;
    }

    public async Task Handle(
        AppendIncidentEventCommand command,
        CancellationToken cancellationToken
    )
    {
        var incident = await _repository.GetByIdAsync( command.IncidentId, cancellationToken );

        if(incident == null )
        {
            throw new InvalidOperationException("Incident not found.");
        }

        var incidentEvent = incident.AppendEvent(
            command.Title,
            command.Type,
            command.OccurredAt,
            command.Details,
            command.CreatedBy
        );

        await _repository.AddEventAsync(incidentEvent, cancellationToken);
        await _repository.SaveChangesAsync(cancellationToken);
    }
}
