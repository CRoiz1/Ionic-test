using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using API_MTech.Models;  // Asegúrate de importar el espacio de nombres correcto

namespace API_MTech.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        [HttpGet]
        public ActionResult<IEnumerable<User>> GetUsers()
        {
            var users = new List<User>
            {
                new User { Id = 1, Name = "John Doe", Email = "john@example.com" },
                new User { Id = 2, Name = "Jane Smith", Email = "jane@example.com" }
            };

            return Ok(users);
        }
    }
}
