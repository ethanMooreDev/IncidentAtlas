using IncidentAtlas.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace IncidentAtlas.Infrastructure.Persistence.Configurations;

public sealed class IncidentConfiguration : IEntityTypeConfiguration<Incident>
{
    public void Configure(EntityTypeBuilder<Incident> builder)
    {
        builder.ToTable("Incidents");

        builder.HasKey(i => i.IncidentId);

        builder.Property(i => i.Title)
            .IsRequired()
            .HasMaxLength(200);

        builder.Property(i => i.Severity)
            .IsRequired()
            .HasConversion<int>();

        builder.Property(i => i.Status)
            .IsRequired()
            .HasConversion<int>();

        builder.Property(i => i.CreatedAtUtc)
            .IsRequired();

        builder.HasMany(i => i.Events)
            .WithOne()
            .HasForeignKey(i => i.IncidentId)
            .OnDelete(DeleteBehavior.Cascade);

        builder.Navigation(i => i.Events)
            .UsePropertyAccessMode(PropertyAccessMode.Field);
    }
}
