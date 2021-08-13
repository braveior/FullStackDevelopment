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
            using (var db = new TaskManagerContext())
            {
                var tasks = db.TaskItems.ToList();
                return Ok(tasks);
            }
        }

        [HttpPost("addTask")]
        public IActionResult AddTask(TaskItem newTask)
        {
            using (var db = new TaskManagerContext())
             {
            db.TaskItems.Add(newTask);
            db.SaveChanges();
            }
        
            return Ok();
        }

    }
}
