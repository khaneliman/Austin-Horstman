using System;
namespace Khaneliman.Domain.Interfaces
{
    public interface ILibraryExperience
    {
        public Guid LibraryExperienceId { get; set; }

        public ILibrary Library { get; set; }

        public IEmployer Employer { get; set; }

        public DateOnly StartDate { get; set; }

        public DateOnly EndDate { get; set; }
    }
}