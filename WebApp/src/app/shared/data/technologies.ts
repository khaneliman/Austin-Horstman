// Technology skill levels
export type SkillLevel = 1 | 2 | 3 | 4 | 5;

export interface TechnologySkill {
  name: string;
  skillLevel?: SkillLevel; // Optional - technologies without skill level are "interested"
  description?: string;
}

// Centralized technology skills data
export const TECHNOLOGY_SKILLS: readonly TechnologySkill[] = [
  // High proficiency technologies (4-5 stars)
  { name: 'Angular', skillLevel: 5 },
  { name: 'TypeScript', skillLevel: 5 },
  { name: 'Nix', skillLevel: 5 },
  { name: 'Lua', skillLevel: 5 },
  { name: 'GitHub Actions', skillLevel: 5 },
  { name: 'Git', skillLevel: 5 },
  { name: 'C#', skillLevel: 4 },
  { name: '.NET', skillLevel: 4 },
  { name: 'SQL Server', skillLevel: 4 },
  { name: 'Azure', skillLevel: 4 },

  // Moderate proficiency technologies (2-3 stars)
  { name: 'Docker', skillLevel: 3 },
  { name: 'JavaScript', skillLevel: 3 },
  { name: 'Rust', skillLevel: 3 },
  { name: 'Java', skillLevel: 3 },
  { name: 'SCSS', skillLevel: 3 },
  { name: 'MySQL', skillLevel: 3 },
  { name: 'C++', skillLevel: 2 },

  // Interested technologies (no skill level)
  { name: 'Swift' },
  { name: 'MAUI' },
  { name: 'Leptos' },
  { name: 'Svelte' },
  { name: 'Rocket (Rust)' },
  { name: 'Zig' },
  { name: 'Game Development' },
] as const;

// Helper functions to get technologies by skill level
export function getProficientTechnologies(): TechnologySkill[] {
  return TECHNOLOGY_SKILLS.filter(tech => (tech.skillLevel ?? 0) >= 4).map(
    tech => ({ ...tech })
  );
}

export function getLearnedTechnologies(): TechnologySkill[] {
  return TECHNOLOGY_SKILLS.filter(
    tech => (tech.skillLevel ?? 0) >= 2 && (tech.skillLevel ?? 0) <= 3
  ).map(tech => ({ ...tech }));
}

export function getInterestedTechnologies(): TechnologySkill[] {
  return TECHNOLOGY_SKILLS.filter(
    tech => !tech.skillLevel || tech.skillLevel === 1
  ).map(tech => ({ ...tech }));
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
