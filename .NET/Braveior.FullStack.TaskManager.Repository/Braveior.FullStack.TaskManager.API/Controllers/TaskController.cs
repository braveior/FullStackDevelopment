using Braveior.FullStack.TaskManager.Repository.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Braveior.FullStack.TaskManager.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TaskController : ControllerBase
    {
        public TaskController()
        {

        }

        [HttpGet("getTasks")]
        public IActionResult GetTasks()
        {
            using (var db = new taskmanagerContext())
            {
                var tasks = db.Taskitems.ToList();
                return Ok(tasks);
            }
        }

        [HttpPost("addTask")]
        public IActionResult AddTask(Taskitem newTask)
        {
            using (var db = new taskmanagerContext())
            {
                db.Taskitems.Add(newTask);
                db.SaveChanges();
            }

            return Ok();
        }

    }
}
