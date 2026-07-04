using backend.DTOs;

namespace backend.Services
{
    public interface ISubmitServices
    {
        public Task<bool> CreateSubmit(CreateSubmitDTO createSubmitDto);
        public Task<bool> UpdateSubmit(UpdateSubmitDTO updateSubmitDto);
        public Task<bool> DeleteSubmit(int id);
        public Task<SubmitDTO> GetSubmitById(int id);
        public Task<List<SubmitDTO>> GetAllSubmits();
    }
}
