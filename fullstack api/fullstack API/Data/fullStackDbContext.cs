using fullstack_API.Controllers.models;
using Microsoft.EntityFrameworkCore;

namespace fullstack_API.Data
{
    public class fullStackDbContext : DbContext
    {
        public fullStackDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<employee> Employees { get; set; }
    }
}
