import { Route } from '@angular/router';
import { getProjectConfiguration } from '../../shared/data/project-configurations';
import { ProjectDetailConfig } from '../../shared/interfaces/project-detail.interface';

/** Route data for a professional case study page. */
export interface CaseStudyRouteData {
  /** Key into PROJECT_CONFIGURATIONS. */
  readonly project: string;
  /** Fields that differ when a project is shown under another company. */
  readonly overrides?: Partial<ProjectDetailConfig>;
}

/** A lazily loaded case study page rendered from PROJECT_CONFIGURATIONS. */
export function caseStudyRoute(path: string, data: CaseStudyRouteData): Route {
  const config = resolveCaseStudy(data);
  return {
    path,
    title: `${config.title} | Austin Horstman`,
    loadComponent: () => import('./project-case-study.component').then((m) => m.ProjectCaseStudyComponent),
    data: { ...data, description: config.description },
  };
}

/** Resolve a case study's configuration. An unknown key is a routing bug, so fail loudly. */
export function resolveCaseStudy({ project, overrides }: CaseStudyRouteData): ProjectDetailConfig {
  const config = getProjectConfiguration(project);
  if (!config) {
    throw new Error(`No project configuration for case study '${project}'`);
  }
  return overrides ? { ...config, ...overrides } : config;
}
