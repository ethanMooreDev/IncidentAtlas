using IncidentAtlas.Application.Abstractions;
using IncidentAtlas.Application.AI.Handlers;
using IncidentAtlas.Application.Handlers;
using IncidentAtlas.Application.Interfaces;
using IncidentAtlas.Infrastructure.AI;
using IncidentAtlas.Infrastructure.Persistence;
using IncidentAtlas.Web.Middleware;
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
builder.Services.AddScoped<IPostmortemPublishStore, EfPostmortemPublishStore>();

builder.Services.AddTransient<CreateIncidentHandler>();
builder.Services.AddTransient<AppendIncidentEventHandler>();

builder.Services.AddScoped<IIncidentReadStore, EfIncidentReadStore>();
builder.Services.AddScoped<GetIncidentListHandler>();
builder.Services.AddScoped<GetIncidentDetailHandler>();

builder.Services.AddTransient<ApiExceptionMiddleware>();

builder.Services.AddScoped<GenerateIncidentSummaryHandler>();
builder.Services.AddScoped<GenerateIncidentPostmortemDraftHandler>();
builder.Services.AddScoped<PublishPostmortemHandler>();

builder.Services.Configure<AzureOpenAiOptions>(builder.Configuration.GetSection("AzureOpenAI"));

//builder.Services.AddScoped<IIncidentAiAnalyzer, FakeIncidentAiAnalyzer>();
builder.Services.AddScoped<IIncidentAiAnalyzer, AzureOpenAiIncidentAiAnalyzer>();


builder.Services.AddCors(options =>
{
    options.AddPolicy("DevCors", policy =>
        policy
            .WithOrigins(
                "http://localhost:5173",
                "http://127.0.0.1:5173"
            )
            .AllowAnyHeader()
            .AllowAnyMethod()
    );
});


var app = builder.Build();

using (var scope = app.Services.CreateScope())
{
    var db = scope.ServiceProvider.GetRequiredService<IncidentAtlasDbContext>();
    db.Database.Migrate();
    var conn = db.Database.GetDbConnection();
    Console.WriteLine($"DB DataSource: {conn.DataSource}");
    Console.WriteLine($"DB Database:  {conn.Database}");
}

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();

    app.UseCors("DevCors");
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.UseStaticFiles();

app.UseMiddleware<ApiExceptionMiddleware>();

app.MapControllers();
app.MapFallbackToFile("/index.html");

app.Run();
