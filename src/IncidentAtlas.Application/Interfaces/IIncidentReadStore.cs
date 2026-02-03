using IncidentAtlas.Application.Queries;
using IncidentAtlas.Application.ReadModels;

public interface IIncidentReadStore
{
    Task<IReadOnlyList<IncidentSummaryDto>> GetIncidentsAsync(
        GetIncidentListQuery query,
        CancellationToken ct
    );

    Task<IncidentDetailDto?> GetIncidentDetailAsync(
        Guid incidentId,
        CancellationToken ct
    );
}
