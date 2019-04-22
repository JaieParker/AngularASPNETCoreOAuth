using System.Reflection;
using IdentityServer4.EntityFramework.DbContexts;
using IdentityServer4.EntityFramework.Options;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

namespace AuthServer.Infrastructure.Data.Identity
{
    //TODO: http://docs.identityserver.io/en/latest/quickstarts/7_entity_framework.html#refentityframeworkquickstart
    //public class PersistedGrantDbContextFactory : IDesignTimeDbContextFactory<PersistedGrantDbContext>
    //{
    //    public PersistedGrantDbContext CreateDbContext(string[] args)
    //    {
    //        var optionsBuilder = new DbContextOptionsBuilder<PersistedGrantDbContext>();
    //        optionsBuilder.UseSqlServer("Server=(localdb)\\mssqllocaldb;Database=AuthServer;Trusted_Connection=True;MultipleActiveResultSets=true",
    //            sql => sql.MigrationsAssembly(typeof(PersistedGrantDbContextFactory).GetTypeInfo().Assembly.GetName().Name));
    //        return new PersistedGrantDbContext(optionsBuilder.Options, new OperationalStoreOptions());
    //    }
    //}
}
