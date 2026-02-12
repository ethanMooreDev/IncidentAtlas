using IncidentAtlas.Application.ReadModels;
using IncidentAtlas.Application.AI.Models;

namespace IncidentAtlas.Application.Interfaces;

public interface IIncidentAiAnalyzer
{

    Task<AiSummaryResult> SummarizeAsync(IncidentDetailDto incident, CancellationToken ct);

    Task<AiPostmortemDraftResult> DraftPostmortemAsync(IncidentDetailDto incident, CancellationToken ct);

}
