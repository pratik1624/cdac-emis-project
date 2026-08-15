using emis_logger.Models;


namespace LoggerService.Services
{
    public class FileLoggerService : IFileLoggerService
    {
        private readonly string filePath;

        public FileLoggerService()
        {
            var directory = Path.Combine(Directory.GetCurrentDirectory(), "Logs");

            if (!Directory.Exists(directory))
            {
                Directory.CreateDirectory(directory);
            }

            filePath = Path.Combine(directory, "logs.txt");
        }

        public void WriteLog(LogRequest request)
        {
            string log = $"[{request.TimeStamp}] [{request.Level}] [{request.ServiceName}] {request.Message}";

            File.AppendAllText(filePath, log + Environment.NewLine);
        }
    }
}