using System;
namespace Khaneliman.Domain.Interfaces
{
    public interface ILanguage
    {
        public Guid LanguageId { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

    }
}