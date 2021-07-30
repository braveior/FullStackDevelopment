using AutoMapper;
using Braveior.FullStack.TaskManager.API.DTO;
using Braveior.FullStack.TaskManager.Repository.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Braveior.FullStack.TaskManager.API.Mapping
{
    public class DomainToDTOMappingProfile : Profile
    {
        public DomainToDTOMappingProfile()
        {
            CreateMap<Taskitem, TaskItemDTO>();
        }
            
    }
}
