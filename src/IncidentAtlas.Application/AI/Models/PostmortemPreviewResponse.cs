using IncidentAtlas.Application.AI.Models;

namespace IncidentAtlas.Web.Contracts.Ai;

public sealed record PostmortemPreviewResponse(
    string ContentMarkdown,
    IReadOnlyList<Citation> Citations,
    int InputEventSequenceMax,
    string? Model,
    DateTimeOffset GeneratedAtUtc
);
