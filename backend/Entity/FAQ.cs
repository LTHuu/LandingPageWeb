using System.ComponentModel.DataAnnotations;

namespace backend.Entity
{
    public class FAQ
    {
        public int Id { get; set; }
        [Required,MaxLength(200)]
        public string QuesttionText { get; set; } = string.Empty;
        [Required, MaxLength(500)]
        public string AnswerText { get; set; }
    }
}