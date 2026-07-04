using backend.DTOs;
using backend.Services;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SubmitController :ControllerBase
    {
        private readonly ISubmitServices _submitServices;

        public SubmitController(ISubmitServices submitServices)
        {
            _submitServices = submitServices;
        }

        [HttpGet("getAll")]
        public async Task<ActionResult<List<SubmitDTO>>> GetAllSubmits()
        {
            return await _submitServices.GetAllSubmits();
        }

        [HttpPost("create")]
        public async Task<ActionResult<SubmitDTO>> CreateSubmit([FromBody] CreateSubmitDTO dto)
        {
            if(dto == null) return BadRequest("Submit data is null.");
            await _submitServices.CreateSubmit(dto);
            return Ok( new { message = "Submit created successfully."});
        }
        [HttpPut("update")]
        public async Task<ActionResult> updateSubmit([FromBody] UpdateSubmitDTO dto)
        {
            var result = await _submitServices.UpdateSubmit(dto);
            if (!result) return BadRequest("Sửa thất bại!");
            return Ok("Sửa thành công!");
        }
        [HttpDelete("delete/{id}")]
        public async Task<ActionResult> deleteSubmit(int id) {
            var result = await _submitServices.DeleteSubmit(id);
            if (!result) return BadRequest("Không thành công!");
            return Ok("xóa thành công!");
        }
        [HttpGet("getById/{id}")]
        public async Task<ActionResult<SubmitDTO>> getById(int id) {
            var result = await _submitServices.GetSubmitById(id);
            if (result == null) return BadRequest("Không tồn tại!");
            return result;
        }
    }
}
