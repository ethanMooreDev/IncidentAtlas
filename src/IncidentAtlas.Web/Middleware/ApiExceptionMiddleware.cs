using System.Text.Json;
using IncidentAtlas.Application.Exceptions;
using Microsoft.AspNetCore.Http;

namespace IncidentAtlas.Web.Middleware;

public sealed class ApiExceptionMiddleware : IMiddleware
{
    public async Task InvokeAsync(HttpContext context, RequestDelegate next)
    {
        try
        {
            await next(context);
        }
        catch (ConcurrencyConflictException ex)
        {
            context.Response.StatusCode = StatusCodes.Status409Conflict;
            context.Response.ContentType = "application/json";

            var payload = new
            {
                error = "concurrency_conflict",
                message = ex.Message
            };

            await context.Response.WriteAsync(JsonSerializer.Serialize(payload));
        }
    }
}
