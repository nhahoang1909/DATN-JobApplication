﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JobApplicationProject.Core.Models
{
    public class District : BaseModel
    {
        public string Name { get; set; } = string.Empty;
        public Guid? ProvinceId { get; set; }

        public virtual Province? Province { get; set; }
    }
}
