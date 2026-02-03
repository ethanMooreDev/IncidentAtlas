using IncidentAtlas.Application.Queries;
using IncidentAtlas.Application.ReadModels;

namespace IncidentAtlas.Application.Handlers;

public sealed class GetIncidentDetailHandler
{
    private readonly IIncidentReadStore _readStore;

    public GetIncidentDetailHandler(IIncidentReadStore readStore)
    {
        _readStore = readStore;
    }

    public Task<IncidentDetailDto?> Handle(
        GetIncidentDetailQuery query,
        CancellationToken cancellationToken
    )
    {
        return _readStore.GetIncidentDetailAsync(query.IncidentId, cancellationToken);
    }
}
