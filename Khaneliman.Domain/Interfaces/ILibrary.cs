using System;
namespace Khaneliman.Domain.Interfaces
{
    public interface ILibrary
    {
        public Guid LibraryId { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

    }
}