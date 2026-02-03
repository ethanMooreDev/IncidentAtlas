using IncidentAtlas.Application.Interfaces;
using IncidentAtlas.Domain.Entities;

namespace IncidentAtlas.Domain.Tests
{
    public sealed class FakeIncidentRepository : IIncidentRepository
    {
        private Dictionary<Guid, Incident> _repository = new Dictionary<Guid, Incident>();

        public Task AddAsync(Incident incident, CancellationToken cancellationToken = default)
        {
            cancellationToken.ThrowIfCancellationRequested();

            _repository[incident.IncidentId] = incident;

            return Task.CompletedTask;
        }

        public Task<Incident?> GetByIdAsync(Guid incidentId, CancellationToken cancellationToken = default)
        {
            cancellationToken.ThrowIfCancellationRequested();

            if(!_repository.ContainsKey(incidentId))
            {
                return Task.FromResult<Incident?>(null);
            }

            return Task.FromResult<Incident?>(_repository[incidentId]);
        }
    }
}
