using IncidentAtlas.Domain.Enums;

namespace IncidentAtlas.Application.ReadModels;

public sealed record IncidentEventDto(
    Guid IncidentEventId,
    int Sequence,
    DateTimeOffset OccurredAtUtc,
    IncidentEventType Type,
    string Title,
    string? Details,
    string? CreatedBy
);
