using IncidentAtlas.Application.Queries;
using IncidentAtlas.Application.ReadModels;

namespace IncidentAtlas.Application.Handlers;

public sealed class GetIncidentListHandler
{
    private readonly IIncidentReadStore _readStore;

    public GetIncidentListHandler(IIncidentReadStore readStore)
    {
        _readStore = readStore;
    }

    public Task<IReadOnlyList<IncidentSummaryDto>> Handle(
        GetIncidentListQuery query,
        CancellationToken cancellationToken
    )
    {
        return _readStore.GetIncidentsAsync(query, cancellationToken);
    }
}
