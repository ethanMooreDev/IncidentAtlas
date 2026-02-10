namespace IncidentAtlas.Application.AI;

public sealed record AiPostmortemDraftResult(
    string DraftMarkdown,
    IReadOnlyList<Citation> Citations,
    DateTimeOffset GeneratedAtUtc
);