using LoggerService.Services;
namespace emis_logger
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            builder.Services.AddControllers();

            builder.Services.AddScoped<IFileLoggerService, FileLoggerService>();

            var app = builder.Build();

            app.MapControllers();

            app.Run("http://localhost:5005");
        }
    }
}
