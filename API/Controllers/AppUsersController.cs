using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.Entities;
using API.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace API.Controllers
{

    [Authorize]
    public class AppUsersController : BaseApiController
    {

        private readonly IUserRepository _userRepository;

        public AppUsersController(IUserRepository userRepository)
        {
            _userRepository = userRepository;

        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<AppUser>>> GetUsers()
        {
            return Ok(await _userRepository.GetUsersAsync());
        }


        // [HttpGet("{id}")]
        // public async Task<ActionResult<AppUser>> GetUsers(int id)
        // {
        //     return Ok(await _userRepository.GetUserByUdAsync(id));

        // }

        [HttpGet("{username}")]
        public async Task<ActionResult<AppUser>> GetUser(string username)
        {
            return await _userRepository.GetUserByUsernameAsync(username);

        }

    }
}