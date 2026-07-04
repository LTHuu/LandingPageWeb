using backend.Data;
using backend.DTOs;
using backend.Entity;
using Microsoft.EntityFrameworkCore;

namespace backend.Repository
{
    public class SubmitRepository : ISubmitRepository
    {
        private readonly AppDbContext _context;

        public SubmitRepository(AppDbContext context)
        {
            _context = context;
        }

        public async Task<bool> createSubmit(CreateSubmitDTO submit)
        {
            var newSubmit = new Submit
            {
                Email = submit.email,
                QuestionText = submit.question
            };
            var result = _context.Submit.Add(newSubmit);
            return await _context.SaveChangesAsync()>0;
        }

        public async Task<bool> deleteSumbit(int id)
        {
            var submit = await _context.Submit.FindAsync(id);
            if (submit == null) {
                return false;
            }
            _context.Submit.Remove(submit);
            await _context.SaveChangesAsync();
            return true;
        }

        public async Task<List<Submit>?> getAllSubmit()
        {
            return await _context.Submit.ToListAsync();
        }

        public async Task<Submit?> getSubmitById(int id)
        {
            return _context.Submit.FirstOrDefault(s => s.Id == id);
        }

        public async Task<bool> updateSubmit(UpdateSubmitDTO submit)
        {
            var oldSubmit = await getSubmitById(submit.Id);
            if (oldSubmit == null) { 
                return false;
            }
            var updateSubmit = new Submit
            {
                Id = submit.Id,
                Email = submit.email,
                QuestionText = submit.question
            };
            var result = _context.Submit.Update(updateSubmit);
            return await _context.SaveChangesAsync()>0;
        }
    }
}
