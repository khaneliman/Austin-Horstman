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

export type ProjectCaseStyle = 'ledger' | 'split' | 'compact';

export interface CasePanelConfig {
  eyebrow?: string;
  title?: string;
  status?: string;
}

export interface SidebarPanelConfig {
  overviewEyebrow?: string;
  overviewText?: string;
  impactHeading?: string;
}

export interface ContentSection {
  title: string;
  content: string;
  icon?: string;
  type?: 'text' | 'html' | 'list';
  items?: string[];
}

export interface ProjectDetailConfig {
  // Visual/Branding
  headerIcon: string;
  primaryColor: string;
  styleVariant?: ProjectCaseStyle;
  casePanel?: CasePanelConfig;
  sidebar?: SidebarPanelConfig;

  // Navigation
  backRoute: string;
  backLabel: string;
  companyKey: string;
  hoverColor: string;

  // Content
  title: string;
  description: string;
  outcome?: string;
  technologies: TechnologyTag[];
  quickStats?: QuickStat[];
  overview: ContentSection;
  features: Feature[];
  technicalDetails?: ContentSection[];
  specialSections?: ContentSection[];
  impact?: string;
  keyTakeaways?: string[];

  // Layout Options
  showQuickStats: boolean;
  showTechnicalHighlights: boolean;
  showImpactSection: boolean;
  gridColumns?: 'single' | 'double';
}
