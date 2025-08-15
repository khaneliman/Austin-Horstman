export interface TechnologyTag {
  name: string;
  color: string;
}

export interface QuickStat {
  label: string;
  value: string;
  icon: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export interface ContentSection {
  title: string;
  content: string;
  icon?: string;
  type?: 'text' | 'html' | 'list';
  items?: string[];
}

export type HeaderStyle = 'simple' | 'complex';

export interface ProjectDetailConfig {
  // Visual/Branding
  backgroundGradient: string;
  headerStyle: HeaderStyle;
  headerIcon: string;
  primaryColor: string;

  // Navigation
  backRoute: string;
  backLabel: string;
  companyKey: string;
  hoverColor: string;

  // Content
  title: string;
  description: string;
  technologies: TechnologyTag[];
  quickStats?: QuickStat[];
  overview: ContentSection;
  features: Feature[];
  technicalDetails?: ContentSection[];
  specialSections?: ContentSection[];
  impact?: string;

  // Layout Options
  showQuickStats: boolean;
  showTechnicalHighlights: boolean;
  showImpactSection: boolean;
  gridColumns?: 'single' | 'double';
}
