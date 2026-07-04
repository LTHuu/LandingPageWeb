using System.ComponentModel.DataAnnotations;

namespace backend.Entity
{
    public class Submit
    {
        public int Id { get; set; }
        [Required,MaxLength(50)]
        [EmailAddress]
        public string Email { get; set; }
        [MaxLength(500)]
        public string QuestionText { get; set; }
    }
}
