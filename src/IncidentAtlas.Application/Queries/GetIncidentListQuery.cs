using IncidentAtlas.Domain.Enums;

namespace IncidentAtlas.Application.Queries;

public sealed record GetIncidentListQuery(
    int Take = 50,
    int Skip = 0,
    IncidentStatus? Status = null,
    IncidentSeverity? Severity = null
);
