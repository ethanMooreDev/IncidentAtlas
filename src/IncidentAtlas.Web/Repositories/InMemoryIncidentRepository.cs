using IncidentAtlas.Application.Interfaces;
using IncidentAtlas.Domain.Entities;
using System.Collections.Concurrent;

namespace IncidentAtlas.Web.Repositories;

public class InMemoryIncidentRepository : IIncidentRepository
{
    private readonly ConcurrentDictionary<Guid, Incident> _store = new();

    public Task AddAsync(Incident incident, CancellationToken cancellationToken)
    {
        _store[incident.IncidentId] = incident;
        return Task.CompletedTask;
    }

    public Task AddEventAsync(IncidentEvent incidentEvent, CancellationToken ct)
    {
        throw new NotImplementedException();
    }

    public Task<Incident?> GetByIdAsync(Guid incidentId, CancellationToken cancellationToken)
    {
        _store.TryGetValue(incidentId, out var incident);
        return Task.FromResult(incident);
    }

    public Task SaveChangesAsync(CancellationToken ct)
    {
        return Task.CompletedTask;
    }
}
