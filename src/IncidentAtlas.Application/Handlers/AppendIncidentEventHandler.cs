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

        incident.AppendEvent(
            command.Title,
            command.Type,
            command.OccurredAt,
            command.Details,
            command.CreatedBy
        );

        // No need to call update if using tracked entities later
    }
}
