using System;
namespace Khaneliman.Domain.Interfaces
{
    public interface IFrameworkExperience
    {
        public Guid FrameworkExperienceId { get; set; }

        public IFramework Framework { get; set; }

        public IEmployer Employer { get; set; }

        public DateOnly StartDate { get; set; }

        public DateOnly EndDate { get; set; }
    }
}