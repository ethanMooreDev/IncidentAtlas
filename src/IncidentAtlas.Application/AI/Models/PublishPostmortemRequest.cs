using IncidentAtlas.Application.AI.Models;

namespace IncidentAtlas.Web.Contracts.Ai;

public sealed record PublishPostmortemRequest(
    string ContentMarkdown,
    IReadOnlyList<Citation> Citations,
    int InputEventSequenceMax,
    string? Model,
    DateTimeOffset GeneratedAtUtc,
    string? PublishedBy
);
