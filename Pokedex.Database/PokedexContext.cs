using Microsoft.EntityFrameworkCore;
using Pokedex.Database.Models;

namespace Pokedex.Database
{
    public class PokedexContext : DbContext
    {
        public DbSet<Pokemon> Pokemon { get; set; } = null!;

        public PokedexContext(DbContextOptions<PokedexContext> options) : base(options) { }
    }
}
