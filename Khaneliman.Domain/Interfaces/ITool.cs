using System;
namespace Khaneliman.Domain.Interfaces
{
    public interface ITool
    {
        public Guid ToolId { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

    }
}