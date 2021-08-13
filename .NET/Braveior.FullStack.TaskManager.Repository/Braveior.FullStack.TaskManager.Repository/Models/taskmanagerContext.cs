using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace Braveior.FullStack.TaskManager.Repository.Models
{
    public partial class TaskManagerContext : DbContext
    {
        public TaskManagerContext(DbContextOptions<TaskManagerContext> options)
            : base(options)
        {
        }

        public virtual DbSet<TaskItem> TaskItems { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            
            modelBuilder.Entity<TaskItem>(entity=>

            {
                entity.HasKey(e => e.TaskItemId);
                entity.ToTable("taskitem");
            });
            base.OnModelCreating(modelBuilder);
        }
    }
}
