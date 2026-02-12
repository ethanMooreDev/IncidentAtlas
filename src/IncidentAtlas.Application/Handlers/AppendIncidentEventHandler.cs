using IncidentAtlas.Application.Commands;
using IncidentAtlas.Application.Exceptions;
using IncidentAtlas.Application.Interfaces;
using IncidentAtlas.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using System.Data;

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
        const int maxAttempts = 3;

        for (var attempt = 1; attempt <= maxAttempts; attempt++)
        {
            try
            {
                var incident = await _repository.GetByIdAsync(command.IncidentId, cancellationToken);
                if (incident is null)
                    throw new InvalidOperationException("Incident not found.");

                var newEvent = incident.AppendEvent(
                    command.Title,
                    command.Type,
                    command.OccurredAt,
                    command.Details,
                    command.CreatedBy
                );

                // If you're using AddEventAsync, keep it here
                await _repository.AddEventAsync(newEvent, cancellationToken);

                await _repository.SaveChangesAsync(cancellationToken);
                return; // success
            }
            catch (DbUpdateConcurrencyException) when (attempt < maxAttempts)
            {
                // Another writer updated the incident row (rowversion mismatch).
                // Just retry.
                continue;
            }
            catch (DbUpdateConcurrencyException ex)
            {
                throw new ConcurrencyConflictException(
                    "Concurrency conflict while appending an incident event. Please retry.",
                    ex
                );
            }
        }

        // Should never hit here due to return/throw paths
        throw new ConcurrencyConflictException("Concurrency conflict while appending an incident event. Please retry.");
    }
}
