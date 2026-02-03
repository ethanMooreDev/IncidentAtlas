using IncidentAtlas.Domain.Entities;
using IncidentAtlas.Domain.Enums;

namespace IncidentAtlas.Web.Contracts.Incidents;

public sealed record IncidentResponse(
    Guid IncidentId,
    string Title,
    IncidentSeverity Severity,
    IncidentStatus Status,
    DateTimeOffset CreatedAtUtc,
    IReadOnlyList<IncidentEventResponse> Events
)
{
    public static IncidentResponse FromDomain(Incident incident) =>
        new(
            incident.IncidentId,
            incident.Title,
            incident.Severity,
            incident.Status,
            incident.CreatedAtUtc,
            incident.Events.Select(IncidentEventResponse.FromDomain).ToList()
        );
}
