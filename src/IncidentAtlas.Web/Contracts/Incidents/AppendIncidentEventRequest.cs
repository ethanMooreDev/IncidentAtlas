using IncidentAtlas.Domain.Enums;

namespace IncidentAtlas.Web.Contracts.Incidents;

public sealed record AppendIncidentEventRequest(
    IncidentEventType Type,
    DateTimeOffset OccurredAtUtc,
    string Title,
    string? Details,
    string? CreatedBy
);
