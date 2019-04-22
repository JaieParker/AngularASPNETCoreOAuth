// using Microsoft.AspNetCore;
// using Microsoft.AspNetCore.Hosting;

using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.EntityFrameworkCore;
using System;
using AuthServer.Infrastructure.Data.Identity;
using IdentityServer4.EntityFramework.DbContexts;

namespace AuthServer
{
    public class Program
    {
        public static void Main(string[] args)
        {
            // WAS
            CreateWebHostBuilder(args).Build().Run();

            //var host = CreateWebHostBuilder(args).Build();

            //using (var scope = host.Services.CreateScope())
            //{
            //    try
            //    {
            //        var appIdentityDbContext = scope.ServiceProvider.GetService<AppIdentityDbContext>();
            //        appIdentityDbContext.Database.Migrate();
            //    }
            //    catch (Exception ex)
            //    {
            //        var logger = scope.ServiceProvider.GetRequiredService<ILogger<Program>>();
            //        logger.LogError(ex, "An error occurred while migrating or initializing the AppIdentityDbContext database.");
            //    }

            //    //try
            //    //{
            //    //    var persistedGrantDbContext = scope.ServiceProvider.GetService<PersistedGrantDbContext>();
            //    //    persistedGrantDbContext.Database.Migrate();
            //    //}
            //    //catch (Exception ex)
            //    //{
            //    //    var logger = scope.ServiceProvider.GetRequiredService<ILogger<Program>>();
            //    //    logger.LogError(ex, "An error occurred while migrating or initializing the PersistedGrantDbContext database.");
            //    //}
            //}

            //host.Run();
        }

        public static IWebHostBuilder CreateWebHostBuilder(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseStartup<Startup>();
                // set via build env: ASPNETCORE_URLS=http://*:5000
                //.UseUrls("http://0.0.0.0:5000");
    }
}
