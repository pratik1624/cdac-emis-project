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

//using emis_logger.Models;
//using emis_logger.Service;
//using Microsoft.AspNetCore.Mvc;

//namespace emis_logger.Controllers
//{
//    [ApiController]
//    [Route("api/logs")]
//    public class LogsController : ControllerBase
//    {
//        private readonly ILogService _logService;

//        public LogsController(ILogService logService)
//        {
//            _logService = logService;
//        }

//        [HttpPost]
//        public IActionResult CreateLog([FromBody] LogRequest request)
//        {
//            if (request == null)
//            {
//                return BadRequest("Log request cannot be null.");
//            }

//            if (string.IsNullOrWhiteSpace(request.Message))
//            {
//                return BadRequest("Log message is required.");
//            }

//            _logService.WriteLog(request);

//            return Ok(new
//            {
//                message = "Log saved successfully"
//            });
//        }
//    }
//}