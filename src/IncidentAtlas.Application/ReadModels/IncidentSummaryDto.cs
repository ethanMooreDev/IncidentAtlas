using IncidentAtlas.Domain.Enums;

namespace IncidentAtlas.Application.ReadModels;

public sealed record IncidentSummaryDto(
    Guid IncidentId,
    string Title,
    IncidentSeverity Severity,
    IncidentStatus Status,
    DateTimeOffset CreatedAtUtc,
    DateTimeOffset LatestEventAtUtc,
    int EventCount
);
