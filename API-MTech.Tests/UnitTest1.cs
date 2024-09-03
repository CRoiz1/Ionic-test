using API_MTech.Controllers;
using API_MTech.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using Xunit;

namespace API_MTech.Tests
{
    public class UnitTest1
    {
        [Fact]
        public void GetUsers_ReturnsCorrectUsers()
        {
            var controller = new UserController();

            var result = controller.GetUsers();
            Assert.NotNull(result);

            var okResult = result?.Result as OkObjectResult;
            Assert.NotNull(okResult);

            var users = okResult?.Value as List<User>;

            Assert.NotNull(users);
            Assert.Equal(2, users?.Count);
            Assert.Equal("John Doe", users?[0].Name);
            Assert.Equal("Jane Smith", users?[1].Name);
        }
    }
}
