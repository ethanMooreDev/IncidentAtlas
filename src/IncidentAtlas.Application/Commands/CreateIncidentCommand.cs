using IncidentAtlas.Domain.Enums;

namespace IncidentAtlas.Application.Commands;

public sealed record CreateIncidentCommand(
    string Title,
    IncidentSeverity Severity,
    DateTimeOffset OccurredAtUtc,
    string? Details,
    string? CreatedBy
);
