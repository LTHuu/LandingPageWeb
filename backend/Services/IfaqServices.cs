using backend.DTOs;
using backend.Entity;

namespace backend.Services
{
    public interface IfaqServices
    {
        public Task<bool> CreateFAQ(CreatesFAQ_DTO dto);
        public Task<bool> UpdateFAQ(UpdateFAQ_DTO dto);
        public Task<bool> DeleteFAQ(int id);
        public Task<List<FAQ_DTO>?> GetAllFAQs();
        public Task<FAQ_DTO?> GetFAQById(int id);
    }
}
