namespace IncidentAtlas.Application.AI;

public sealed record AiSummaryResult(
    string SummaryMarkdown,
    IReadOnlyList<Citation> Citations,
    string Model,
    DateTimeOffset GeneratedAtUtc
);
