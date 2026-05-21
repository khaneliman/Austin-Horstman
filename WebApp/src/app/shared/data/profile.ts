import { getAllCompanies } from './companies';

// Personal profile information
export interface PersonalProfile {
  name: string;
  title: string;
  tagline: string;
  location: string;
  yearsOfExperience: number;
}

// Get the earliest company start date
function getCareerStartDate(): Date {
  const companies = getAllCompanies();
  const startDates = companies.map((company) => new Date(company.dateStart));
  const earliestDate = new Date(Math.min(...startDates.map((date) => date.getTime())));
  return earliestDate;
}

// Calculate years of experience dynamically
function calculateYearsOfExperience(): number {
  const today = new Date();
  const careerStart = getCareerStartDate();
  let years = today.getFullYear() - careerStart.getFullYear();
  const monthDiff = today.getMonth() - careerStart.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < careerStart.getDate())) {
    years--;
  }

  return years;
}

// Centralized personal profile data
export const PERSONAL_PROFILE = {
  name: 'Austin Horstman',
  title: 'Solution Architect',
  get tagline(): string {
    const years = calculateYearsOfExperience();
    return `Solution Architect with ${years}+ years of experience modernizing .NET and Angular systems, designing durable data workflows, and helping teams adopt practical open-source and AI-assisted delivery practices.`;
  },
  location: 'Fox Crossing, WI',
  get yearsOfExperience(): number {
    return calculateYearsOfExperience();
  },
};

// Helper function to get personal profile
export function getPersonalProfile(): PersonalProfile {
  return {
    name: PERSONAL_PROFILE.name,
    title: PERSONAL_PROFILE.title,
    tagline: PERSONAL_PROFILE.tagline,
    location: PERSONAL_PROFILE.location,
    yearsOfExperience: PERSONAL_PROFILE.yearsOfExperience,
  };
}
