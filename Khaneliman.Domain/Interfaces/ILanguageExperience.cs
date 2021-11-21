using System;
namespace Khaneliman.Domain.Interfaces
{
    public interface ILanguageExperience
    {
        public Guid LanguageExperienceId { get; set; }

        public ILanguage Language { get; set; }

        public IEmployer Employer { get; set; }

        public DateOnly StartDate { get; set; }

        public DateOnly EndDate { get; set; }
    }
}