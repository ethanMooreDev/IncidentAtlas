using IncidentAtlas.Application.AI.Commands;
using IncidentAtlas.Application.AI.Handlers;
using IncidentAtlas.Application.AI.Models;
using IncidentAtlas.Application.Commands;
using IncidentAtlas.Application.Handlers;
using IncidentAtlas.Application.Interfaces;
using IncidentAtlas.Application.Queries;
using IncidentAtlas.Application.ReadModels;
using IncidentAtlas.Domain.Enums;
using IncidentAtlas.Web.Contracts.Incidents;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;

namespace IncidentAtlas.Web.Controllers;

[Route("api/[controller]")]
[ApiController]
public class IncidentsController : ControllerBase
{
    [HttpPost]
    public async Task<ActionResult<CreateIncidentResponse>> Create(
        [FromServices] CreateIncidentHandler handler,
        [FromBody] CreateIncidentRequest request,
        CancellationToken cancellationToken
    )
    {
        var command = new CreateIncidentCommand(
           request.Title,
           request.Severity,
           request.OccurredAtUtc,
           request.Details,
           request.CreatedBy
       );

        var id = await handler.Handle(command, cancellationToken);

        return CreatedAtAction(nameof(GetById), new { incidentId = id }, new CreateIncidentResponse(id));
    }

    [HttpPost("{incidentId:guid}/events")]
    public async Task<IActionResult> AppendEvent(
        [FromServices] AppendIncidentEventHandler handler,
        [FromRoute] Guid incidentId,
        [FromBody] AppendIncidentEventRequest request,
        CancellationToken cancellationToken
    )
    {
        var command = new AppendIncidentEventCommand(
            incidentId,
            request.Type,
            request.OccurredAtUtc,
            request.Title,
            request.Details,
            request.CreatedBy
        );

        await handler.Handle(command, cancellationToken);
        return NoContent();
    }

    [HttpGet]
    public async Task<ActionResult<IReadOnlyList<IncidentSummaryDto>>> GetList(
        [FromServices] GetIncidentListHandler handler,
        [FromQuery] int skip = 0,
        [FromQuery] int take = 50,
        [FromQuery] IncidentStatus? status = null,
        [FromQuery] IncidentSeverity? severity = null,
        CancellationToken ct = default
    )
    {
        var query = new GetIncidentListQuery(take, skip, status, severity);
        var results = await handler.Handle(query, ct);
        return Ok(results);
    }

    [HttpGet("{incidentId:guid}")]
    public async Task<ActionResult<IncidentDetailDto>> GetById(
        [FromServices] GetIncidentDetailHandler handler,
        [FromRoute] Guid incidentId,
        CancellationToken ct
    )
    {
        var result = await handler.Handle(new GetIncidentDetailQuery(incidentId), ct);
        return result is null ? NotFound() : Ok(result);
    }
}
