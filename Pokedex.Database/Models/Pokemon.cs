using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Pokedex.Database.Models
{
    public class Pokemon
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Type { get; set; }
        public int HitPoints { get; set; }
        public int Attack { get; set; }
        public int Defense { get; set; }
        public int SpecialAttack { get; set; }
        public int SpecialDefense { get; set; }
        public int Speed { get; set; }

        public string ImageUrl => "/images/" + Id.ToString().PadLeft(3, '0') + ".png";

        public string ImageThumbUrl => "/thumbnails/" + Id.ToString().PadLeft(3, '0') + ".png";
    }
}
