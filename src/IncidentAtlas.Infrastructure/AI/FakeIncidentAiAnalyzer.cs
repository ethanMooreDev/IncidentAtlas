using IncidentAtlas.Application.AI.Models;
using IncidentAtlas.Application.Interfaces;
using IncidentAtlas.Application.ReadModels;
using System.Text;
using System.Threading;

namespace IncidentAtlas.Infrastructure.AI;

public sealed class FakeIncidentAiAnalyzer : IIncidentAiAnalyzer
{
    public Task<AiPostmortemDraftResult> DraftPostmortemAsync(IncidentDetailDto incident, CancellationToken ct)
    {
        ct.ThrowIfCancellationRequested();

        var citations = new List<Citation>();

        for(int x = incident.Events.Count - 1; x >= 0; x--)
        {
            var incidentEvent = incident.Events[x];

            citations.Prepend(new Citation(
                incidentEvent.IncidentEventId,
                incidentEvent.Sequence,
                incidentEvent.Title,
                null
            ));

            if(citations.Count >= 3)
            {
                break;
            }
        }

        string draftMarkdown = "Something went wrong. Here is the postmortem:\n\n";

        return Task.FromResult<AiPostmortemDraftResult>(new AiPostmortemDraftResult(
            draftMarkdown,
            citations,
            DateTimeOffset.UtcNow,
            10,
            "Ethan-GPTv2.0"
        ));
    }

    public Task<AiSummaryResult> SummarizeAsync(IncidentDetailDto incident, CancellationToken ct)
    {
        ct.ThrowIfCancellationRequested();

        var citations = new List<Citation>();

        for (int x = incident.Events.Count - 1; x >= 0; x--)
        {
            var incidentEvent = incident.Events[x];

            citations.Prepend(new Citation(
                incidentEvent.IncidentEventId,
                incidentEvent.Sequence,
                incidentEvent.Title,
                null
            ));

            if (citations.Count >= 3)
            {
                break;
            }
        }

        string draftMarkdown = "Something went wrong. Here is the summary:\n\n";

        return Task.FromResult<AiSummaryResult>(new AiSummaryResult(
            draftMarkdown,
            citations,
            "Ethan-GPTv2.0",
            DateTimeOffset.UtcNow
        ));
    }
}
