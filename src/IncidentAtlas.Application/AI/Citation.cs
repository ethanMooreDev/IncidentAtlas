namespace IncidentAtlas.Application.AI;

public sealed record Citation(
    Guid IncidentEventId,
    int Sequence,
    string? Quote,
    string? Reason
);
