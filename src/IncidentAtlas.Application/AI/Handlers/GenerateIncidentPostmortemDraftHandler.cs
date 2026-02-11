using IncidentAtlas.Application.AI.Commands;
using IncidentAtlas.Application.AI.Models;
using IncidentAtlas.Application.Interfaces;

namespace IncidentAtlas.Application.AI.Handlers;

public sealed class GenerateIncidentPostmortemDraftHandler
{
    private readonly IIncidentReadStore _readStore;
    private readonly IIncidentAiAnalyzer _analyzer;

    public GenerateIncidentPostmortemDraftHandler(IIncidentReadStore readStore, IIncidentAiAnalyzer analyzer)
    {
        _readStore = readStore;
        _analyzer = analyzer;
    }

    public async Task<AiPostmortemDraftResult> Handle(GenerateIncidentPostmortemDraftCommand command, CancellationToken cancellationToken)
    {
        var incident = await _readStore.GetIncidentDetailAsync(command.IncidentId, cancellationToken);
        if (incident is null)
        {
            throw new InvalidOperationException("Incident not found.");
        }

        if (incident.Events.Count == 0)
            throw new InvalidOperationException("Incident has no events to analyze.");

        var result = await _analyzer.DraftPostmortemAsync(incident, cancellationToken);

        return result;
    }
}
