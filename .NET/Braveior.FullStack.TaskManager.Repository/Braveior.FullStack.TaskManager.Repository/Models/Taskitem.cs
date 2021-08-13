using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

#nullable disable

namespace Braveior.FullStack.TaskManager.Repository.Models
{
    public partial class TaskItem
    {
        [Column("task_item_id")]
        public int TaskItemId { get; set; }
        [Column("task_name")]
        public string TaskName { get; set; }
    }
}
