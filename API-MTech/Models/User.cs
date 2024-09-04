namespace API_MTech.Models
{
    public class User
    {
        public int Id { get; set; }
        public string? Name { get; set; }  // Permite valores nulos
        public string? Email { get; set; }  
    }
}
