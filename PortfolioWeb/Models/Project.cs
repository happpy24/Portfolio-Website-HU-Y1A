namespace PortfolioWeb.Models
{
    public class Project
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Img { get; set; }

        public string Desc_Short { get; set; }

        public string Desc_Long { get; set; }

        public DateTime Date { get; set; }
    }
}
