using IncidentAtlas.Application.AI;
using IncidentAtlas.Application.AI.Commands;
using IncidentAtlas.Application.Interfaces;

namespace IncidentAtlas.Application.Handlers;

public sealed class GenerateIncidentSummaryHandler
{
    private readonly IIncidentReadStore _readStore;
    private readonly IIncidentAiAnalyzer _analyzer;

    public GenerateIncidentSummaryHandler( IIncidentReadStore readStore, IIncidentAiAnalyzer analyzer)
    {
        _readStore = readStore;
        _analyzer = analyzer;
    }

    public async Task<AiSummaryResult> Handle(GenerateIncidentSummaryCommand command, CancellationToken cancellationToken)
    {
        var incident = await _readStore.GetIncidentDetailAsync(command.IncidentId, cancellationToken);
        if (incident is null)
        {
            throw new InvalidOperationException("Incident not found.");
        }

        if (incident.Events.Count == 0)
            throw new InvalidOperationException("Incident has no events to analyze.");

        var result = await _analyzer.SummarizeAsync(incident, cancellationToken);

        return result;
    }
}
