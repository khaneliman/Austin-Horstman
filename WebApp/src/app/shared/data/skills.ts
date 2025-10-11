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
    title: 'Continuous Learning',
    description:
      'Driven by curiosity to never stop learning and improving skills. Always exploring emerging technologies and best practices to stay at the forefront of modern development.',
    icon: 'heroAcademicCap',
    badge: 'Passionate',
    footer: 'Growth • Innovation • Excellence',
  },
  {
    title: 'Open Source Leadership',
    description:
      'Active contributor and maintainer of large-scale open source projects in the Nix ecosystem. Collaborating with developers worldwide to build tools that empower the community.',
    icon: 'heroCodeBracket',
    badge: 'Maintainer',
    footer: 'Nix • Community • Impact',
  },
  {
    title: 'AI & Developer Productivity',
    description:
      'Leading teams in implementing agentic AI solutions to accelerate developer productivity. Teaching and empowering developers to improve their workflows and tooling.',
    icon: 'heroRocketLaunch',
    badge: 'Innovator',
    footer: 'AI • Mentorship • Efficiency',
  },
] as const;

// Helper function to get all personal skills
export function getPersonalSkills(): PersonalSkill[] {
  return PERSONAL_SKILLS.map((skill) => ({ ...skill }));
}
