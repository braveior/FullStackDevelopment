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
        TaskManagerContext _context;
        public TaskController(TaskManagerContext context)
        {
            _context = context;
        }

        [HttpGet("getTasks")]
        public IActionResult GetTasks()
        {
                var tasks = _context.TaskItems.ToList();
                return Ok(tasks);
        }

        [HttpPost("addTask")]
        public IActionResult AddTask(TaskItem newTask)
        {
                _context.TaskItems.Add(newTask);
                _context.SaveChanges();
            return Ok();
        }

    }
}
