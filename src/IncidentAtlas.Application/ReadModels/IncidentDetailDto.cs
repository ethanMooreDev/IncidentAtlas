using IncidentAtlas.Domain.Enums;

namespace IncidentAtlas.Application.ReadModels;

public sealed record IncidentDetailDto(
    Guid IncidentId,
    string Title,
    IncidentSeverity Severity,
    IncidentStatus Status,
    DateTimeOffset CreatedAtUtc,
    List<IncidentEventDto> Events
);
