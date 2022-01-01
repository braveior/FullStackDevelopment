using Braveior.FullStack.TaskManager.Repository.Models;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Braveior.FullStack.TaskManager.API
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors(options =>
            {


                options.AddPolicy("MyPolicy",
                    builder =>
                    {
                        builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
                    });
            });
            services.AddControllers();
            services.AddSwaggerGen(gen =>
            {
                gen.SwaggerDoc("v1.0", new Microsoft.OpenApi.Models.OpenApiInfo { Title = "Task Manager API", Version = "v1.0" });
            });

            //*** - Code for MySQLSQL Starts
            //services.AddDbContext<TaskManagerContext>(options =>
            // options.UseMySql("server=mysql-db;user=root;password=password;database=taskmanager_dotnet",
            //Microsoft.EntityFrameworkCore.ServerVersion.Parse("8.0.26-mysql")));
            //*** - Code for MySQLSQL ends

            services.AddDbContext<TaskManagerContext>(options =>
             options.UseSqlite("Filename=taskmanager.db"));
        }
        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseRouting();

            app.UseCors("MyPolicy");

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
            app.UseSwagger();

            app.UseSwaggerUI(ui =>
            {
                ui.SwaggerEndpoint("/swagger/v1.0/swagger.json", "Task Manager API Endpoint");
            });
            using (var serviceScope = app.ApplicationServices.GetService<IServiceScopeFactory>().CreateScope())
            {
                var context = serviceScope.ServiceProvider.GetRequiredService<TaskManagerContext>();
                context.Database.EnsureCreated();
            }
        }
    }
}
