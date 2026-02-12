using IncidentAtlas.Domain.Entities;
using IncidentAtlas.Infrastructure.Persistence.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace IncidentAtlas.Infrastructure.Persistence;

public class IncidentAtlasDbContext : DbContext
{
    public DbSet<Incident> Incidents => Set<Incident>();
    public DbSet<IncidentEvent> IncidentEvents => Set<IncidentEvent>();
    public DbSet<PublishedPostmortem> PublishedPostmortems => Set<PublishedPostmortem>();


    public IncidentAtlasDbContext(DbContextOptions<IncidentAtlasDbContext> options) : base(options)
    {
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.ApplyConfigurationsFromAssembly(typeof(IncidentAtlasDbContext).Assembly);

        base.OnModelCreating(modelBuilder);
    }
}
