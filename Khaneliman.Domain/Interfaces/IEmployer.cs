using System;

namespace Khaneliman.Domain.Interfaces
{
    public interface IEmployer
    {
        public Guid EmployerId { get; set; }

        public string Name { get; set; }

        public string Location { get; set; }

    }
}

