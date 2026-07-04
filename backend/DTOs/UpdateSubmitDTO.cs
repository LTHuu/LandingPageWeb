namespace backend.DTOs
{
    public class UpdateSubmitDTO
    {
        public int Id { get; set; }
        public string email { get; set; }
        public string question { get; set; } = string.Empty;
    }
}
