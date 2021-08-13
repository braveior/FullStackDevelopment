using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace Braveior.FullStack.TaskManager.Repository.Models
{
    public partial class TaskManagerContext : DbContext
    {
        public TaskManagerContext()
        { }
        public TaskManagerContext(DbContextOptions<TaskManagerContext> options)
            : base(options)
        {
        }

        public virtual DbSet<TaskItem> TaskItems { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseMySql("server=localhost;user=root;password=password;database=taskmanager_dotnet", Microsoft.EntityFrameworkCore.ServerVersion.Parse("8.0.26-mysql"));

            }
        }
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
