using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using taskangular.Server.Models;

namespace taskangular.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SubscriptionController : ControllerBase
    {
        private readonly MyDbContext _db;

        public SubscriptionController(MyDbContext db)
        {
            _db = db;
        }


        [HttpGet("GetAllSubscriptions")]
        public IActionResult GetAllSubscriptions()
        {

            var subscriptions = _db.Subscriptions.ToList();

            return Ok(subscriptions);
        }


    }
}
