using backend.Data;
using backend.DTOs;
using backend.Entity;
using Microsoft.EntityFrameworkCore;

namespace backend.Repository
{
    public class faqRepository : IfaqRepository
    {

        private readonly AppDbContext _dbContext;

        public faqRepository(AppDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<bool> createFaq(CreatesFAQ_DTO dto)
        {
            FAQ faq = new FAQ
            {
                QuesttionText = dto.QuestionText,
                AnswerText = dto.AnswerText
            };
            var result = _dbContext.Add(faq);
            return await _dbContext.SaveChangesAsync() > 0;
        }

        public async Task<bool> deleteFaq(int id)
        {
            var faq = await _dbContext.FAQ.FindAsync(id);
            if (faq == null)
            {
                return false;
            }
            _dbContext.Remove(faq);
            await _dbContext.SaveChangesAsync();
            return true;
        }

        public async Task<List<FAQ>?> getAllFAQ()
        {
            return await _dbContext.FAQ.ToListAsync();
        }

        public async Task<FAQ?> getFaqById(int id)
        {
            return await _dbContext.FAQ.FindAsync(id);
        }

        public async Task<bool> updateFaq(UpdateFAQ_DTO dto)
        {
            var oldFaq = await _dbContext.FAQ.FindAsync(dto.Id);
            if (oldFaq == null)
            {
                return false;
            }
            var faq = new FAQ
            {
                Id = dto.Id,
                QuesttionText = dto.QuestionText,
                AnswerText = dto.AnswerText
            };
            var result = _dbContext.Update(faq);
            return await _dbContext.SaveChangesAsync() > 0;
        }
    }
}
