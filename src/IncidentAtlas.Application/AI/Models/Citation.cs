namespace IncidentAtlas.Application.AI.Models;

public sealed record Citation(
    Guid IncidentEventId,
    int Sequence,
    string? Quote,
    string? Reason
);
