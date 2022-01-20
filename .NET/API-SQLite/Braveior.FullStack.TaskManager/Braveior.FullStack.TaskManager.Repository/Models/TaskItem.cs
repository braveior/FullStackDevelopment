using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Braveior.FullStack.TaskManager.Repository.Models
{
    public class TaskItem
    {
        [Column("task_item_id")]
        public int TaskItemId { get; set; }
        [Column("task_name")]
        public string TaskName { get; set; }
    }
}
