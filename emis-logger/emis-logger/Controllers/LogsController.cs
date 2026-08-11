using Microsoft.AspNetCore.Mvc;

namespace emis_logger.Controllers
{
    public class LogsController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
