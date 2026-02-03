using IncidentAtlas.Application.Commands;
using IncidentAtlas.Application.Handlers;
using IncidentAtlas.Application.Interfaces;
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

    [HttpGet("{incidentId:guid}")]
    public async Task<ActionResult<IncidentResponse>> GetById(
        [FromServices] IIncidentRepository repository,
        [FromRoute] Guid incidentId,
        CancellationToken cancellationToken)
    {
        var incident = await repository.GetByIdAsync(incidentId, cancellationToken);
        if (incident is null)
        {
            return NotFound();
        }

        var response = IncidentResponse.FromDomain(incident);
        return Ok(response);
    }

    [HttpPost("{incidentId:guid}/events")]
    public async Task<IActionResult> AppendEvent(
    [FromServices] AppendIncidentEventHandler handler,
    [FromRoute] Guid incidentId,
    [FromBody] AppendIncidentEventRequest request,
    CancellationToken cancellationToken)
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
}
