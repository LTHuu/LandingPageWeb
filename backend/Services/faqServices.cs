using backend.DTOs;
using backend.Entity;
using backend.Repository;

namespace backend.Services
{
    public class faqServices : IfaqServices
    {
        private readonly IfaqRepository _faqRepository;

        public faqServices(IfaqRepository faqRepository)
        {
            _faqRepository = faqRepository;
        }

        public async Task<bool> CreateFAQ(CreatesFAQ_DTO dto)
        {
            return await _faqRepository.createFaq(dto);
        }

        public async Task<bool> DeleteFAQ(int id)
        {
            return await _faqRepository.deleteFaq(id);
        }

        public async Task<List<FAQ_DTO>?> GetAllFAQs()
        {
            List<FAQ_DTO> result = new List<FAQ_DTO>();
            var temp = await _faqRepository.getAllFAQ();
            if (temp == null) return result;
            foreach (var item in temp)
            {
                result.Add(new FAQ_DTO
                {
                    Id = item.Id,
                    QuestionText = item.QuesttionText,
                    AnswerText = item.AnswerText,
                });
            }
            return result;
        }

        public async Task<FAQ_DTO?> GetFAQById(int id)
        {
            var temp = await _faqRepository.getFaqById(id);
            if(temp == null) return null;
            return new FAQ_DTO
            {
                Id=temp.Id,
                QuestionText = temp.QuesttionText,
                AnswerText=temp.AnswerText,
            };
        }

        public async Task<bool> UpdateFAQ(UpdateFAQ_DTO dto)
        {
            return await _faqRepository.updateFaq(dto);
        }
    }
}
