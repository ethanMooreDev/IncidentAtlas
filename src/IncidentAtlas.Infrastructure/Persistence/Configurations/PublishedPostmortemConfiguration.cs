using IncidentAtlas.Infrastructure.Persistence.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace IncidentAtlas.Infrastructure.Persistence.Configurations;

public sealed class PublishedPostmortemConfiguration : IEntityTypeConfiguration<PublishedPostmortem>
{
    public void Configure(EntityTypeBuilder<PublishedPostmortem> builder)
    {
        builder.ToTable("PublishedPostmortems");

        builder.HasKey(x => x.PublishedPostmortemId);

        builder.Property(x => x.PublishedPostmortemId).ValueGeneratedOnAdd();

        builder.Property(x => x.ContentMarkdown).IsRequired();
        builder.Property(x => x.CitationsJson).IsRequired();

        builder.Property(x => x.PublishedAtUtc).IsRequired();
        builder.Property(x => x.GeneratedAtUtc).IsRequired();

        builder.HasIndex(x => x.IncidentId);
    }
}
