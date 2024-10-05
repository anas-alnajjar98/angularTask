namespace taskangular.Server.Dto
{
    public class ServicesDTO
    {
        public string? ServiceName { get; set; }

        public string? ServiceDescription { get; set; }

        public IFormFile? ServiceImage { get; set; }
    }
}
