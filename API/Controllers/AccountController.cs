using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using API.Data;
using API.DTOs;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class AccountController : BaseApiController
    {
        private readonly DataContext _context;
        public AccountController(DataContext context)
        {
            _context = context;      
        }
        
        [HttpPost("register")]
        public async Task<ActionResult<AppUser>> Register(RegisteDto registeDto){

            if (await UserExist(registeDto.username)) return BadRequest("User already exist!"); 
            using var hmac = new HMACSHA512();
            var user = new AppUser{

                UserName = registeDto.username.ToLower(),
                PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(registeDto.password)),
                PasswordSalt = hmac.Key
            };
            _context.appUsers.Add(user);
            await _context.SaveChangesAsync();
            return user;
        }

        private async Task<bool> UserExist(string username){

            return await _context.appUsers.AnyAsync(x => x.UserName ==username.ToLower());
        }
    }
}