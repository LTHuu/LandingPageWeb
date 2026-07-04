using backend.Entity;
using Microsoft.EntityFrameworkCore;
namespace backend.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options)
        : base(options)
        {
        }
        public DbSet<Submit> Submit { get; set; }
        public DbSet<FAQ> FAQ { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<FAQ>().HasData(
                new FAQ
                {
                    Id = 1,
                    QuesttionText = "Is the watch waterproof?",
                    AnswerText = "Yes, it features an IP68 rating, meaning it is dust-tight and water-resistant. You can wear it while washing your hands or during light workouts, but it is not recommended for diving or high-pressure water sports."
                },
                new FAQ
                {
                    Id = 2,
                    QuesttionText = "Can I share GPS location with family?",
                    AnswerText = "Yes, absolutely. The built-in independent GPS allows you to share your real-time location with family members through the connected mobile app for safety and peace of mind."
                },
                new FAQ
                {
                    Id = 3,
                    QuesttionText = "How accurate is heart rate tracking?",
                    AnswerText = "Our watch uses a next-generation PPG sensor with advanced AI algorithms to filter out noise during movement, ensuring high accuracy throughout your daily activities."
                },
                new FAQ
                {
                    Id = 4,
                    QuesttionText = "Does it work while sleeping?",
                    AnswerText = "Yes, it performs continuous monitoring throughout the night. It analyzes your sleep cycles (deep sleep, light sleep) and provides actionable insights to help you improve your recovery."
                },
                new FAQ
                {
                    Id = 5,
                    QuesttionText = "How long does the battery last?",
                    AnswerText = "With daily usage and continuous monitoring enabled, the battery typically lasts up to 7 days on a single charge. Usage patterns may vary based on GPS and sensor activity."
                },
                new FAQ
                {
                    Id = 6,
                    QuesttionText = "What are the main health features of this smartwatch?",
                    AnswerText = "It offers 24/7 heart rate monitoring, sleep cycle analysis, blood oxygen (SpO2) tracking, and an emergency SOS function."
                },
                new FAQ
                {
                    Id = 7,
                    QuesttionText = "How accurate is the heart rate sensor?",
                    AnswerText = "It uses a new generation PPG sensor combined with AI noise cancellation to ensure high accuracy, even during intense exercise."
                },
                new FAQ
                {
                    Id = 8,
                    QuesttionText = "Can this watch help me improve my sleep quality?",
                    AnswerText = "Yes, it tracks your sleep stages and provides personalized suggestions to help you recover better."
                },
                new FAQ
                {
                    Id = 9,
                    QuesttionText = "Is the GPS tracking reliable for my child?",
                    AnswerText = "Absolutely. It features an independent GPS that allows real-time location sharing with family members."
                },
                new FAQ
                {
                    Id = 10,
                    QuesttionText = "What should I do if the watch detects an abnormality?",
                    AnswerText = "The device will trigger an instant alert, and if configured, it can automatically notify your emergency contacts."
                }
            );
        }
    }
}
