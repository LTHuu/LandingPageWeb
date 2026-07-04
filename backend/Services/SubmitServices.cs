using backend.DTOs;
using backend.Repository;
using Microsoft.VisualBasic;

namespace backend.Services
{
    public class SubmitServices : ISubmitServices
    {

        private readonly ISubmitRepository _repository;

        public SubmitServices(ISubmitRepository repository)
        {
            _repository = repository;
        }

        public async Task<bool> CreateSubmit(CreateSubmitDTO createSubmitDto)
        {
            return await _repository.createSubmit(createSubmitDto);
        }

        public async Task<bool> DeleteSubmit(int id)
        {
            return await _repository.deleteSumbit(id);;
        }

        public async Task<List<SubmitDTO>> GetAllSubmits()
        {
            var submits = await _repository.getAllSubmit();
            List<SubmitDTO> result = new List<SubmitDTO>();
            if(submits == null)
            {
                return result;
            }
            foreach (var submit in submits)
            {
                result.Add(new SubmitDTO
                {
                    Id = submit.Id,
                    Email = submit.Email,
                    question = submit.QuestionText
                });
            }
            return result;
        }

        public async Task<SubmitDTO> GetSubmitById(int id)
        {
            var submit = await _repository.getSubmitById(id);
            return new SubmitDTO
            {
                Id = submit.Id,
                Email = submit.Email,
                question = submit.QuestionText
            };
        }

        public async Task<bool> UpdateSubmit(UpdateSubmitDTO updateSubmitDto)
        {
            return await _repository.updateSubmit(updateSubmitDto);
        }
    }
}
