using IncidentAtlas.Application.Queries;
using IncidentAtlas.Application.ReadModels;
using Microsoft.EntityFrameworkCore;

namespace IncidentAtlas.Infrastructure.Persistence;

public sealed class EfIncidentReadStore : IIncidentReadStore
{
    private readonly IncidentAtlasDbContext _db;

    public EfIncidentReadStore(IncidentAtlasDbContext db)
    {
        _db = db;
    }

    public async Task<IReadOnlyList<IncidentSummaryDto>> GetIncidentsAsync(
        GetIncidentListQuery query,
        CancellationToken ct)
    {
        var q = _db.Incidents.AsNoTracking();

        if (query.Status is not null)
            q = q.Where(i => i.Status == query.Status);

        if (query.Severity is not null)
            q = q.Where(i => i.Severity == query.Severity);

        // Order newest-first.
        var results = await q
            .OrderByDescending(i => i.CreatedAtUtc)
            .Skip(query.Skip)
            .Take(query.Take)
            .Select(i => new IncidentSummaryDto(
                i.IncidentId,
                i.Title,
                i.Severity,
                i.Status,
                i.CreatedAtUtc,
                // Use nullable Max to avoid empty-set issues (should never be empty, but safe)
                i.Events.Max(e => (DateTimeOffset?)e.OccurredAtUtc) ?? i.CreatedAtUtc,
                i.Events.Count
            ))
            .ToListAsync(ct);

        return results;
    }

    public async Task<IncidentDetailDto?> GetIncidentDetailAsync(
        Guid incidentId,
        CancellationToken ct)
    {
        // Query 1: incident header
        var incident = await _db.Incidents
            .AsNoTracking()
            .Where(i => i.IncidentId == incidentId)
            .Select(i => new
            {
                i.IncidentId,
                i.Title,
                i.Severity,
                i.Status,
                i.CreatedAtUtc
            })
            .SingleOrDefaultAsync(ct);

        if (incident is null)
            return null;

        // Query 2: timeline events, ordered and projected
        var events = await _db.IncidentEvents
            .AsNoTracking()
            .Where(e => e.IncidentId == incidentId)
            .OrderBy(e => e.Sequence)
            .Select(e => new IncidentEventDto(
                e.IncidentEventId,
                e.Sequence,
                e.OccurredAtUtc,
                e.Type,
                e.Title,
                e.Details,
                e.CreatedBy
            ))
            .ToListAsync(ct);

        return new IncidentDetailDto(
            incident.IncidentId,
            incident.Title,
            incident.Severity,
            incident.Status,
            incident.CreatedAtUtc,
            events
        );
    }
}