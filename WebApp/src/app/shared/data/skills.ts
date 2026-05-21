// Personal skill card information for showcasing strengths and core competencies
export interface PersonalSkill {
  title: string;
  description: string;
  icon: string;
  badge: string;
  footer: string;
}

// Centralized personal skills data - What I Bring
export const PERSONAL_SKILLS: readonly PersonalSkill[] = [
  {
    title: 'Modernization Delivery',
    description:
      'Translates aging business workflows into maintainable web applications with clear boundaries, pragmatic architecture, and migration paths teams can keep shipping against.',
    icon: 'heroAcademicCap',
    badge: 'Enterprise Systems',
    footer: '.NET • Angular • SQL Server',
  },
  {
    title: 'Open Source Leadership',
    description:
      'Maintains large-scale Nix ecosystem projects with a bias for repeatable environments, clear contribution paths, and tooling that reduces operational drag.',
    icon: 'heroCodeBracket',
    badge: 'Maintainer',
    footer: 'Nix • Developer Tooling • Community',
  },
  {
    title: 'AI & Developer Productivity',
    description:
      'Introduces agentic development workflows where they measurably improve delivery: code review support, documentation loops, test generation, and team enablement.',
    icon: 'heroRocketLaunch',
    badge: 'Team Enablement',
    footer: 'AI Workflows • Mentorship • Automation',
  },
] as const;

// Helper function to get all personal skills
export function getPersonalSkills(): PersonalSkill[] {
  return PERSONAL_SKILLS.map((skill) => ({ ...skill }));
}
