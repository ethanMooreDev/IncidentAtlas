using IncidentAtlas.Application.Handlers;
using IncidentAtlas.Application.Interfaces;
using IncidentAtlas.Infrastructure.Persistence;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<IncidentAtlasDbContext>(options =>
{
    var cs = builder.Configuration.GetConnectionString("IncidentAtlas");
    options.UseSqlServer(cs);
});

builder.Services.AddScoped<IIncidentRepository, EfIncidentRepository>();

builder.Services.AddTransient<CreateIncidentHandler>();
builder.Services.AddTransient<AppendIncidentEventHandler>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.UseStaticFiles();

app.MapControllers();

app.Run();
