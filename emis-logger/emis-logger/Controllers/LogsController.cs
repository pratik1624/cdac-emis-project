using LoggerService.Models;
using LoggerService.Services;
using Microsoft.AspNetCore.Mvc;

namespace LoggerService.Controllers
{
    [ApiController]
    [Route("api/logs")]
    public class LogsController : ControllerBase
    {
        private readonly IFileLoggerService loggerService;

        public LogsController(IFileLoggerService loggerService)
        {
            this.loggerService = loggerService;
        }

        [HttpPost]
        public IActionResult SaveLog(LogRequest request)
        {
            loggerService.WriteLog(request);

            return Ok("Log Saved");
        }
    }
}