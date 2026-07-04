namespace backend.DTOs
{
    public class CreateSubmitDTO
    {
        public string email { get; set; }
        public string question { get; set; } = string.Empty;
    }
}
