using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace API.Data.Migarion
{
    /// <inheritdoc />
    public partial class ExtendedUserEntityUpdate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Introducation",
                table: "appUsers",
                newName: "Introduction");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Introduction",
                table: "appUsers",
                newName: "Introducation");
        }
    }
}
