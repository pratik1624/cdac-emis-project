using LoggerService.Models;

namespace LoggerService.Services
{
    public interface IFileLoggerService
    {
        void WriteLog(LogRequest request);
    }
}