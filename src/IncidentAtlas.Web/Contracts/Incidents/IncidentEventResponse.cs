using IncidentAtlas.Domain.Entities;
using IncidentAtlas.Domain.Enums;

namespace IncidentAtlas.Web.Contracts.Incidents;

public sealed record IncidentEventResponse(
    Guid IncidentEventId,
    Guid IncidentId,
    int Sequence,
    DateTimeOffset OccurredAtUtc,
    IncidentEventType Type,
    string Title,
    string? Details,
    string? CreatedBy
)
{
    public static IncidentEventResponse FromDomain(IncidentEvent e) =>
        new(
            e.IncidentEventId,
            e.IncidentId,
            e.Sequence,
            e.OccurredAtUtc,
            e.Type,
            e.Title,
            e.Details,
            e.CreatedBy
        );
}
