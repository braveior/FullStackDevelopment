using AutoMapper;
using Braveior.FullStack.TaskManager.API.DTO;
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
        private readonly IMapper _mapper;
        public TaskController(IMapper mapper)
        {
            _mapper = mapper;
        }

        [HttpGet("getTasks")]
        public IActionResult GetTasks()
        {
            using (var db = new taskmanagerContext())
            {
                var tasks = db.Taskitems.ToList();
                return Ok(_mapper.Map<List<TaskItemDTO>>(tasks));
            }
        }

        [HttpPost("addTask")]
        public IActionResult AddTask(TaskItemDTO taskItemDTO)
        {
            Taskitem newTask = new Taskitem()
            {
                TaskName = taskItemDTO.TaskName,
            };
            using (var db = new taskmanagerContext())
            {
                db.Taskitems.Add(newTask);
                db.SaveChanges();
            }

            return Ok();
        }

    }
}
