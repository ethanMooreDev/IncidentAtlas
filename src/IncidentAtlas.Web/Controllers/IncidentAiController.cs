using IncidentAtlas.Application.AI.Commands;
using IncidentAtlas.Application.AI.Handlers;
using IncidentAtlas.Application.AI.Models;
using IncidentAtlas.Web.Contracts.Ai;
using Microsoft.AspNetCore.Mvc;

namespace IncidentAtlas.Web.Controllers;

[ApiController]
[Route("api/incidents/{incidentId:guid}/ai")]
public sealed class IncidentAiController : ControllerBase
{
    private readonly GenerateIncidentPostmortemDraftHandler _previewHandler;
    private readonly PublishPostmortemHandler _publishHandler;
    private readonly GenerateIncidentSummaryHandler _summaryHandler;

    public IncidentAiController(
        GenerateIncidentPostmortemDraftHandler previewHandler,
        PublishPostmortemHandler publishHandler,
        GenerateIncidentSummaryHandler summaryHandler
    )
    {
        _previewHandler = previewHandler;
        _publishHandler = publishHandler;
        _summaryHandler = summaryHandler;
    }

    // POST /api/incidents/{id}/ai/postmortem/preview
    [HttpPost("postmortem/preview")]
    public async Task<ActionResult<PostmortemPreviewResponse>> PreviewPostmortem(
        Guid incidentId,
        CancellationToken ct)
    {
        var result = await _previewHandler.Handle(
            new GenerateIncidentPostmortemDraftCommand(incidentId),
            ct);

        // InputEventSequenceMax should reflect the incident state used for generation.
        // The clean way: analyzer returns it; if you haven't added that yet, compute here.
        var inputEventSequenceMax = result.InputEventSequenceMax;

        return Ok(new PostmortemPreviewResponse(
            ContentMarkdown: result.DraftMarkdown,
            Citations: result.Citations,
            InputEventSequenceMax: inputEventSequenceMax,
            Model: result.Model,
            GeneratedAtUtc: result.GeneratedAtUtc
        ));
    }

    // POST /api/incidents/{id}/ai/postmortem/publish
    [HttpPost("postmortem/publish")]
    public async Task<ActionResult<PublishPostmortemResponse>> PublishPostmortem(
        Guid incidentId,
        [FromBody] PublishPostmortemRequest request,
        CancellationToken ct)
    {
        var publishedId = await _publishHandler.Handle(
            new PublishPostmortemCommand(
                IncidentId: incidentId,
                ContentMarkdown: request.ContentMarkdown,
                Citations: request.Citations,
                InputEventSequenceMax: request.InputEventSequenceMax,
                Model: request.Model,
                GeneratedAtUtc: request.GeneratedAtUtc,
                PublishedBy: request.PublishedBy
            ),
            ct);

        return Ok(new PublishPostmortemResponse(publishedId));
    }

    [HttpPost("summary/preview")]
    public async Task<ActionResult<AiSummaryResult>> GetAiSummary(
        [FromRoute] Guid incidentId,
        CancellationToken ct
    )
    {
        try
        {
            var result = await _summaryHandler.Handle(new GenerateIncidentSummaryCommand(incidentId), ct);
            return Ok(result);
        }
        catch (InvalidOperationException ex) when (ex.Message.Contains("Incident not found"))
        {
            return NotFound();
        }
    }
}
