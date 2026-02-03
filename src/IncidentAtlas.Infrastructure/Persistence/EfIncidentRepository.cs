using IncidentAtlas.Application.Interfaces;
using IncidentAtlas.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace IncidentAtlas.Infrastructure.Persistence;

public sealed class EfIncidentRepository : IIncidentRepository
{
    private readonly IncidentAtlasDbContext _db;

    public EfIncidentRepository(IncidentAtlasDbContext db)
    {
        _db = db;
    }

    public async Task AddAsync(Incident incident, CancellationToken cancellationToken = default)
    {
        await _db.Incidents.AddAsync(incident, cancellationToken);
        await _db.SaveChangesAsync(cancellationToken);
    }

    public async Task<Incident?> GetByIdAsync(Guid incidentId, CancellationToken cancellationToken = default)
    {
        return await _db.Incidents
            .Include(i => i.Events)
            .SingleOrDefaultAsync(i => i.IncidentId == incidentId, cancellationToken);
    }
}
