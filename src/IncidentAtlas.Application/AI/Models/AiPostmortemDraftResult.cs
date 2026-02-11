namespace IncidentAtlas.Application.AI.Models;

public sealed record AiPostmortemDraftResult(
    string DraftMarkdown,
    IReadOnlyList<Citation> Citations,
    DateTimeOffset GeneratedAtUtc,
    int InputEventSequenceMax,
    string? Model
);