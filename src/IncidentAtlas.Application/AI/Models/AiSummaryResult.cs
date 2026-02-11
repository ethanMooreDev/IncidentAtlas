namespace IncidentAtlas.Application.AI.Models;

public sealed record AiSummaryResult(
    string SummaryMarkdown,
    IReadOnlyList<Citation> Citations,
    string Model,
    DateTimeOffset GeneratedAtUtc
);
