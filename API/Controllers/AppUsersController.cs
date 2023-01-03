using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace API.Controllers
{
    public class AppUsersController : BaseApiController
    {
        private readonly DataContext _context;

        public AppUsersController(DataContext context)
        {
            _context = context;
        }

        // [HttpGet]
        // public Task< ActionResultIEnumerable<AppUser>>> GetUsers (){
        //     var users = _context.appUsers.ToList();
        //     return users; 
        // }

        [HttpGet]
        public ActionResult<IEnumerable<AppUser>> GetUsers()
        {
            var users = _context.appUsers.ToList();
            return users;
        }
    }
}