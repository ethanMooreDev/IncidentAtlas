using IncidentAtlas.Domain.Enums;

namespace IncidentAtlas.Web.Contracts.Incidents;

public sealed record CreateIncidentRequest(
    string Title,
    IncidentSeverity Severity,
    DateTimeOffset OccurredAtUtc,
    string? Details,
    string? CreatedBy
);
