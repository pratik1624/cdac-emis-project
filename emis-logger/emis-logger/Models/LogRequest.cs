namespace LoggerService.Models
{
    public class LogRequest
    {
        public string ServiceName { get; set; }

        public string Level { get; set; }

        public string Message { get; set; }

        public DateTime TimeStamp { get; set; }
    }
}
