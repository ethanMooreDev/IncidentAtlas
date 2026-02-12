namespace IncidentAtlas.Infrastructure.Persistence.Models;

public sealed class PublishedPostmortem
{
    public Guid PublishedPostmortemId { get; set; }
    public Guid IncidentId { get; set; }

    public string ContentMarkdown { get; set; } = string.Empty;
    public string CitationsJson { get; set; } = "[]";

    public int InputEventSequenceMax { get; set; }
    public string? Model { get; set; }
    public DateTimeOffset GeneratedAtUtc { get; set; }

    public DateTimeOffset PublishedAtUtc { get; set; }
    public string? PublishedBy { get; set; }
}
