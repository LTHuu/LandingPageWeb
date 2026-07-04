using backend.DTOs;
using backend.Entity;

namespace backend.Repository
{
    public interface ISubmitRepository
    {
        public Task<bool> createSubmit(CreateSubmitDTO submit);
        public Task<bool> updateSubmit(UpdateSubmitDTO submit);
        public Task<Submit?> getSubmitById(int id);
        public Task<bool> deleteSumbit(int id);
        public Task<List<Submit>?> getAllSubmit();
    }
}
