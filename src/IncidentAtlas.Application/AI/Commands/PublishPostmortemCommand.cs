using IncidentAtlas.Application.AI.Models;

namespace IncidentAtlas.Application.AI.Commands;

public sealed record PublishPostmortemCommand(
    Guid IncidentId,
    string ContentMarkdown,
    IReadOnlyList<Citation> Citations,
    int InputEventSequenceMax,
    string? Model,
    DateTimeOffset GeneratedAtUtc,
    string? PublishedBy
);