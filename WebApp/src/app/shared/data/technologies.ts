// Technology skill levels and categories
export type SkillLevel = 1 | 2 | 3 | 4 | 5;
export type TechnologyCategory = 'proficient' | 'learned' | 'interested';

export interface TechnologySkill {
  name: string;
  category: TechnologyCategory;
  skillLevel?: SkillLevel; // For proficient and learned technologies
  description?: string;
}

// Centralized technology skills data
export const TECHNOLOGY_SKILLS: readonly TechnologySkill[] = [
  // Proficient Technologies (with skill levels)
  { name: 'Angular', category: 'proficient', skillLevel: 5 },
  { name: 'C#', category: 'proficient', skillLevel: 4 },
  { name: '.NET', category: 'proficient', skillLevel: 4 },
  { name: 'TypeScript', category: 'proficient', skillLevel: 5 },
  { name: 'SQL Server', category: 'proficient', skillLevel: 4 },
  { name: 'Azure', category: 'proficient', skillLevel: 4 },
  { name: 'Nix', category: 'proficient', skillLevel: 5 },
  { name: 'Lua', category: 'proficient', skillLevel: 5 },
  { name: 'GitHub Actions', category: 'proficient', skillLevel: 5 },
  { name: 'Git', category: 'proficient', skillLevel: 5 },

  // Learned Technologies (with skill levels)
  { name: 'Docker', category: 'learned', skillLevel: 3 },
  { name: 'JavaScript', category: 'learned', skillLevel: 3 },
  { name: 'Rust', category: 'learned', skillLevel: 3 },
  { name: 'Java', category: 'learned', skillLevel: 3 },
  { name: 'SCSS', category: 'learned', skillLevel: 3 },
  { name: 'MySQL', category: 'learned', skillLevel: 3 },
  { name: 'C++', category: 'learned', skillLevel: 2 },

  // Interested Technologies
  { name: 'Swift', category: 'interested' },
  { name: 'MAUI', category: 'interested' },
  { name: 'Leptos', category: 'interested' },
  { name: 'Svelte', category: 'interested' },
  { name: 'Rocket (Rust)', category: 'interested' },
  { name: 'Zig', category: 'interested' },
  { name: 'Game Development', category: 'interested' },
] as const;

// Helper functions to get technologies by category
export function getTechnologiesByCategory(
  category: TechnologyCategory
): TechnologySkill[] {
  return TECHNOLOGY_SKILLS.filter(tech => tech.category === category);
}

export function getProficientTechnologies(): TechnologySkill[] {
  return getTechnologiesByCategory('proficient');
}

export function getLearnedTechnologies(): TechnologySkill[] {
  return getTechnologiesByCategory('learned');
}

export function getInterestedTechnologies(): TechnologySkill[] {
  return getTechnologiesByCategory('interested');
}

// Get all unique technology names for portfolio calculations
export function getAllTechnologyNames(): string[] {
  return TECHNOLOGY_SKILLS.map(tech => tech.name);
}

// Get technology by name
export function getTechnologyByName(name: string): TechnologySkill | undefined {
  return TECHNOLOGY_SKILLS.find(
    tech => tech.name.toLowerCase() === name.toLowerCase()
  );
}
