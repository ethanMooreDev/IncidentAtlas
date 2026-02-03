using IncidentAtlas.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace IncidentAtlas.Infrastructure.Persistence.Configurations;

public sealed class IncidentEventConfiguration : IEntityTypeConfiguration<IncidentEvent>
{
    public void Configure(EntityTypeBuilder<IncidentEvent> builder)
    {
        builder.ToTable("IncidentEvents");

        builder.HasKey(e => e.IncidentEventId);

        builder.Property(e => e.IncidentEventId)
            .ValueGeneratedOnAdd();

        builder.Property(e => e.IncidentId)
            .IsRequired();

        builder.Property(e => e.Sequence)
            .IsRequired();

        builder.Property(e => e.OccurredAtUtc)
            .IsRequired();

        builder.Property(e => e.Type)
            .IsRequired()
            .HasConversion<int>();

        builder.Property(e => e.Title)
            .IsRequired()
            .HasMaxLength(200);

        builder.Property(e => e.Details)
            .HasMaxLength(4000);

        builder.Property(e => e.CreatedBy)
            .HasMaxLength(200);

        // Unique per-incident ordering key
        builder.HasIndex(e => new { e.IncidentId, e.Sequence })
            .IsUnique();
    }
}
