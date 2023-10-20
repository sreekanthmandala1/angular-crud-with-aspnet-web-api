using fullstack_API.Controllers.models;
using fullstack_API.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace fullstack_API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EmployeesController : Controller
    {
        private readonly fullStackDbContext fullStackDbContext;

        public EmployeesController(fullStackDbContext _fullStackDbContext)
        {
            fullStackDbContext = _fullStackDbContext;
        }
        [HttpGet]
        public async Task<IActionResult>  GetAllEmployees()
        {
            var employees = await fullStackDbContext.Employees.ToListAsync();
                return Ok(employees);
        }

        [HttpPost]
        public async Task<IActionResult> AddEmployee([FromBody] employee employeeRequest)
        {
            employeeRequest.Id = Guid.NewGuid();
           await fullStackDbContext.Employees.AddAsync(employeeRequest);
            await fullStackDbContext.SaveChangesAsync();
            return Ok(employeeRequest);
        }
    }
}
