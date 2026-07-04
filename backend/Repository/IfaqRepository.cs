using backend.DTOs;
using backend.Entity;

namespace backend.Repository
{
    public interface IfaqRepository
    {
        public Task<bool> createFaq(CreatesFAQ_DTO dto);
        public Task<bool> updateFaq(UpdateFAQ_DTO dto);
        public Task<FAQ?> getFaqById(int id);
        public Task<bool> deleteFaq(int id);
        public Task<List<FAQ>?> getAllFAQ();
    }
}
