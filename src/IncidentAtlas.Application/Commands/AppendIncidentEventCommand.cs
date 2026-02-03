using IncidentAtlas.Domain.Enums;

namespace IncidentAtlas.Application.Commands;

public sealed record AppendIncidentEventCommand(
    Guid IncidentId,
    IncidentEventType Type,
    DateTimeOffset OccurredAt,
    string Title,
    string? Details,
    string? CreatedBy
);
