﻿namespace taskangular.Server.Dto
{
    public class UserRequestDTO
    {
        public string? Name { get; set; } = null!;

        public string Email { get; set; } = null!;

        public string Password { get; set; } = null!;
    }
}