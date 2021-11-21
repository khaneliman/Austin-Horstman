using System;
namespace Khaneliman.Domain.Interfaces
{
    public interface IFramework
    {
        public Guid FrameworkId { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

    }
}