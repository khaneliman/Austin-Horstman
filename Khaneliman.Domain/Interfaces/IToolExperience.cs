using System;
namespace Khaneliman.Domain.Interfaces
{
    public interface IToolExperience
    {
        public Guid ToolExperienceId { get; set; }

        public ITool Tool { get; set; }

        public IEmployer Employer { get; set; }

        public DateOnly StartDate { get; set; }

        public DateOnly EndDate { get; set; }
    }
}