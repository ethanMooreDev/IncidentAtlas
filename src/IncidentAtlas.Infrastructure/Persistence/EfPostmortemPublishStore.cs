using System.Text.Json;
using IncidentAtlas.Application.Abstractions;
using IncidentAtlas.Application.AI.Models;
using IncidentAtlas.Infrastructure.Persistence;
using IncidentAtlas.Infrastructure.Persistence.Models;
using Microsoft.EntityFrameworkCore;

namespace IncidentAtlas.Infrastructure.Persistence;

public sealed class EfPostmortemPublishStore : IPostmortemPublishStore
{
    private static readonly JsonSerializerOptions JsonOptions = new(JsonSerializerDefaults.Web);

    private readonly IncidentAtlasDbContext _db;

    public EfPostmortemPublishStore(IncidentAtlasDbContext db)
    {
        _db = db;
    }

    public async Task<Guid> SavePublishedPostmortemAsync(
        Guid incidentId,
        string contentMarkdown,
        IReadOnlyList<Citation> citations,
        int inputEventSequenceMax,
        string? model,
        DateTimeOffset generatedAtUtc,
        DateTimeOffset publishedAtUtc,
        string? publishedBy,
        CancellationToken ct)
    {
        // Serialize citations as durable JSON
        var citationsJson = JsonSerializer.Serialize(citations, JsonOptions);

        var row = new PublishedPostmortem
        {
            PublishedPostmortemId = Guid.NewGuid(),
            IncidentId = incidentId,
            ContentMarkdown = contentMarkdown,
            CitationsJson = citationsJson,
            InputEventSequenceMax = inputEventSequenceMax,
            Model = model,
            GeneratedAtUtc = generatedAtUtc,
            PublishedAtUtc = publishedAtUtc,
            PublishedBy = publishedBy
        };

        _db.PublishedPostmortems.Add(row);
        await _db.SaveChangesAsync(ct);

        return row.PublishedPostmortemId;
    }
}
