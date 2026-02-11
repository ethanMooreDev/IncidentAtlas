using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace IncidentAtlas.Infrastructure.Persistence.Migrations
{
    /// <inheritdoc />
    public partial class AddPublishedPostmortems : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "PublishedPostmortems",
                columns: table => new
                {
                    PublishedPostmortemId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    IncidentId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    ContentMarkdown = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CitationsJson = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    InputEventSequenceMax = table.Column<int>(type: "int", nullable: false),
                    Model = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    GeneratedAtUtc = table.Column<DateTimeOffset>(type: "datetimeoffset", nullable: false),
                    PublishedAtUtc = table.Column<DateTimeOffset>(type: "datetimeoffset", nullable: false),
                    PublishedBy = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PublishedPostmortems", x => x.PublishedPostmortemId);
                });

            migrationBuilder.CreateIndex(
                name: "IX_PublishedPostmortems_IncidentId",
                table: "PublishedPostmortems",
                column: "IncidentId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "PublishedPostmortems");
        }
    }
}
