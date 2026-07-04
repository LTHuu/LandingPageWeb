using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace backend.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "FAQ",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    QuesttionText = table.Column<string>(type: "character varying(200)", maxLength: 200, nullable: false),
                    AnswerText = table.Column<string>(type: "character varying(500)", maxLength: 500, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FAQ", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Submit",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Email = table.Column<string>(type: "character varying(50)", maxLength: 50, nullable: false),
                    QuestionText = table.Column<string>(type: "character varying(500)", maxLength: 500, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Submit", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "FAQ",
                columns: new[] { "Id", "AnswerText", "QuesttionText" },
                values: new object[,]
                {
                    { 1, "Yes, it features an IP68 rating, meaning it is dust-tight and water-resistant. You can wear it while washing your hands or during light workouts, but it is not recommended for diving or high-pressure water sports.", "Is the watch waterproof?" },
                    { 2, "Yes, absolutely. The built-in independent GPS allows you to share your real-time location with family members through the connected mobile app for safety and peace of mind.", "Can I share GPS location with family?" },
                    { 3, "Our watch uses a next-generation PPG sensor with advanced AI algorithms to filter out noise during movement, ensuring high accuracy throughout your daily activities.", "How accurate is heart rate tracking?" },
                    { 4, "Yes, it performs continuous monitoring throughout the night. It analyzes your sleep cycles (deep sleep, light sleep) and provides actionable insights to help you improve your recovery.", "Does it work while sleeping?" },
                    { 5, "With daily usage and continuous monitoring enabled, the battery typically lasts up to 7 days on a single charge. Usage patterns may vary based on GPS and sensor activity.", "How long does the battery last?" },
                    { 6, "It offers 24/7 heart rate monitoring, sleep cycle analysis, blood oxygen (SpO2) tracking, and an emergency SOS function.", "What are the main health features of this smartwatch?" },
                    { 7, "It uses a new generation PPG sensor combined with AI noise cancellation to ensure high accuracy, even during intense exercise.", "How accurate is the heart rate sensor?" },
                    { 8, "Yes, it tracks your sleep stages and provides personalized suggestions to help you recover better.", "Can this watch help me improve my sleep quality?" },
                    { 9, "Absolutely. It features an independent GPS that allows real-time location sharing with family members.", "Is the GPS tracking reliable for my child?" },
                    { 10, "The device will trigger an instant alert, and if configured, it can automatically notify your emergency contacts.", "What should I do if the watch detects an abnormality?" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "FAQ");

            migrationBuilder.DropTable(
                name: "Submit");
        }
    }
}
