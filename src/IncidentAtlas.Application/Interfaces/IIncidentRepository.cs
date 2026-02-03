using IncidentAtlas.Domain.Entities;

namespace IncidentAtlas.Application.Interfaces;

public interface IIncidentRepository
{
    Task AddAsync(Incident incident, CancellationToken cancellationToken = default);
    Task<Incident?> GetByIdAsync(Guid incidentId, CancellationToken cancellationToken = default);
}
