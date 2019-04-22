using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;


namespace Resource.Api
{
    public class Program
    {
        public static void Main(string[] args)
        {
            CreateWebHostBuilder(args).Build().Run();
        }

        public static IWebHostBuilder CreateWebHostBuilder(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseStartup<Startup>();
                // set via build env: ASPNETCORE_URLS=http://*:5050
                //.UseUrls("http://0.0.0.0:5050");
    }
}
