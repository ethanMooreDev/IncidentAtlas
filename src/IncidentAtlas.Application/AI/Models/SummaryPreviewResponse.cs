namespace IncidentAtlas.Application.AI.Models;

public sealed record SummaryPreviewResponse(
    string ContentMarkdown,
    IReadOnlyList<Citation> Citations,
    int InputEventSequenceMax,
    string? Model,
    DateTimeOffset GeneratedAtUtc
);
