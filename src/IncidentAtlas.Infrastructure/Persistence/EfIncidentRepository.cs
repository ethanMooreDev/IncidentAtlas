using IncidentAtlas.Application.Interfaces;
using IncidentAtlas.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using System.Threading;

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
        //await _db.SaveChangesAsync(cancellationToken);
    }

    public async Task AddEventAsync(IncidentEvent incidentEvent, CancellationToken ct)
    {
        await _db.IncidentEvents.AddAsync(incidentEvent);
    }

    public async Task<Incident?> GetByIdAsync(Guid incidentId, CancellationToken cancellationToken = default)
    {
        return await _db.Incidents
            .Include(i => i.Events)
            .SingleOrDefaultAsync(i => i.IncidentId == incidentId, cancellationToken);
    }

    public async Task SaveChangesAsync(CancellationToken cancellationToken = default)
    {
        try
        {
            await _db.SaveChangesAsync(cancellationToken);
        }
        catch (DbUpdateConcurrencyException ex)
        {
            foreach (var entry in ex.Entries)
            {
                var entityType = entry.Metadata.ClrType.Name;

                // Primary key values
                var pk = entry.Metadata.FindPrimaryKey();
                var keyValues = pk?.Properties
                    .Select(p => $"{p.Name}={entry.Property(p.Name).CurrentValue}")
                    .ToArray() ?? Array.Empty<string>();

                Console.WriteLine($"Concurrency exception on entity: {entityType}");
                Console.WriteLine($"Key: {string.Join(", ", keyValues)}");
                Console.WriteLine($"State: {entry.State}");
            }

            throw;
        }
    }
}
