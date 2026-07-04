using backend.DTOs;
using backend.Services;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class FAQController :ControllerBase
    {
        private readonly IfaqServices _faqServices;

        public FAQController(IfaqServices faqServices)
        {
            _faqServices = faqServices;
        }

        [HttpGet("getAll")]
        public async Task<ActionResult<List<FAQ_DTO>>> GetAll()
        {
            var result = await _faqServices.GetAllFAQs();
            if(result == null) return BadRequest(new {Message = "Lấy không thành công!"});
            return result;
        }
        [HttpPost("create")]
        public async Task<ActionResult> CreateFAQ([FromBody] CreatesFAQ_DTO dto)
        {
            var result = await _faqServices.CreateFAQ(dto);
            if (result == false) return BadRequest("tạo không thành công");
            return Ok(new { Message = "Tạo thành công!" });
        }
        [HttpPut("update")]
        public async Task<ActionResult> UpdateFAQ(UpdateFAQ_DTO faq) {
            var result = await _faqServices.UpdateFAQ(faq);
            if(result == false) return BadRequest("Sửa thất bại!");
            return Ok(new { Message = "Sửa thành công" });
        }

        [HttpDelete("delete/{id}")]
        public async Task<ActionResult> DeleteFAQ(int id)
        {
            var result = await _faqServices.DeleteFAQ(id);
            if(result == false) return BadRequest("Không tồn tại!");
            return Ok("Xóa thành công!");
        }

        [HttpPost("getById/{id}")]
        public async Task<ActionResult<FAQ_DTO>> getById(int id) {
            var result = await _faqServices.GetFAQById(id);
            if (result == null) return BadRequest("Không tồn tại submit có id là" + id + " !");
            return result;
        }

    }
}
