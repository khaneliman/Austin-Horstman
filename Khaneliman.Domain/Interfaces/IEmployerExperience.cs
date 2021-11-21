using System;
namespace Khaneliman.Domain.Interfaces
{
    public interface IEmployerExperience
    {
        public Guid EmployerExperienceId { get; set; }

        public IEmployer Employer { get; set; }

        public List<IFramework> Frameworks { get; set; }

        public List<ILanguage> Languages { get; set; }

        public List<ILibrary> Libraries { get; set; }

        public List<ITool> Tools { get; set; }

        public DateOnly StartDate { get; set; }

        public DateOnly EndDate { get; set; }
    }
}