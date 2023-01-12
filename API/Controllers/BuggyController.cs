using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class BuggyController : BaseApiController
    {
        private readonly DataContext _context;
        public BuggyController(DataContext context)
        {
            _context = context;

        }

        [HttpGet("auth")]
        public ActionResult<string> GetSecret()
        {
            return "secret text";
        }

        [HttpGet("not-found")]
        public ActionResult<String> GetNotFound()
        {
            var thing = _context.appUsers.Find(-1);

            var thingToReturn = thing.ToString();

            return thingToReturn;

        }

        [HttpGet("server-error")]
        public ActionResult<string> GetServerError()
        {
            var thing = _context.appUsers.Find(-1);

            var thingToReturn = thing.ToString();

            return thingToReturn;

        }

        [HttpGet("bad-request")]
        public ActionResult<String> GetBadRequest()
        {

            return BadRequest("This was not a good request");

        }

    }
}