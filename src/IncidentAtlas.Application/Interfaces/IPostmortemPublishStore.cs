using IncidentAtlas.Application.AI.Models;

namespace IncidentAtlas.Application.Abstractions;
public interface IPostmortemPublishStore
{
    Task<Guid> SavePublishedPostmortemAsync(
        Guid incidentId,
        string contentMarkdown,
        IReadOnlyList<Citation> citations,
        int inputEventSequenceMax,
        string? model,
        DateTimeOffset generatedAtUtc,
        DateTimeOffset publishedAtUtc,
        string? publishedBy,
        CancellationToken ct
    );
}
