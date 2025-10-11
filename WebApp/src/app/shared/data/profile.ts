// Personal profile information
export interface PersonalProfile {
  name: string;
  title: string;
  tagline: string;
  location: string;
  yearsOfExperience: number;
}

// Centralized personal profile data
export const PERSONAL_PROFILE: PersonalProfile = {
  name: 'Austin Horstman',
  title: 'Senior Software Engineer',
  tagline:
    'Senior Software Engineer with 7+ years of experience specializing in .NET, Angular, and modern web technologies. Passionate about application modernization, database design, and open-source development in the Nix ecosystem.',
  location: 'Fox Crossing, WI',
  yearsOfExperience: 7,
} as const;

// Helper function to get personal profile
export function getPersonalProfile(): PersonalProfile {
  return { ...PERSONAL_PROFILE };
}
