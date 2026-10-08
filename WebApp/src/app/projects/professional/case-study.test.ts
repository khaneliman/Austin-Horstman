import '@angular/compiler';
import { describe, expect, it } from 'bun:test';
import { Routes } from '@angular/router';
import { COMPANIES } from '../../shared/data/companies';
import { CaseStudyRouteData, resolveCaseStudy } from './case-study';
import { COREBTS_ROUTES } from './corebts/corebts.routes';
import { GEEKSQUAD_ROUTES } from './geeksquad/geeksquad.routes';
import { NRI_NA_ROUTES } from './nri-na/nri-na.routes';
import { ProjectCaseStudyComponent } from './project-case-study.component';
import { SKYLINE_ROUTES } from './skyline/skyline.routes';
import { WEST_ROUTES } from './west/west.routes';

// Keyed by the last segment of each company's projectsRoute.
const COMPANY_ROUTES: Record<string, Routes> = {
  'nri-na': NRI_NA_ROUTES,
  corebts: COREBTS_ROUTES,
  skyline: SKYLINE_ROUTES,
  west: WEST_ROUTES,
  geeksquad: GEEKSQUAD_ROUTES,
};

const caseStudyRoutes = Object.values(COMPANY_ROUTES).flatMap((routes) => routes.filter((route) => route.data));

describe('case study routes', () => {
  it('resolve every route to a project configuration', () => {
    expect(caseStudyRoutes.length).toBeGreaterThan(0);
    for (const route of caseStudyRoutes) {
      expect(() => resolveCaseStudy(route.data as CaseStudyRouteData)).not.toThrow();
    }
  });

  it('lazy-load the shared case study page', async () => {
    for (const route of caseStudyRoutes) {
      expect(await route.loadComponent?.()).toBe(ProjectCaseStudyComponent);
    }
  });

  it('cover every project each company lists', () => {
    for (const company of Object.values(COMPANIES)) {
      const routes = COMPANY_ROUTES[company.projectsRoute.split('/').pop() ?? ''];
      expect(routes).toBeDefined();
      const paths = new Set(routes?.map((route) => route.path));
      for (const project of company.projects) {
        expect(paths.has(project.route)).toBe(true);
      }
    }
  });

  it('show the Do It Best platform with NRI-NA navigation under NRI-NA', () => {
    const route = NRI_NA_ROUTES.find(({ path }) => path === 'doitbest');
    const config = resolveCaseStudy(route?.data as CaseStudyRouteData);

    expect(config.title).toBe(resolveCaseStudy({ project: 'doitbest-platform' }).title);
    expect(config.backRoute).toBe('/experience/nri-na');
    expect(config.companyKey).toBe('nri-na');
  });

  it('fail loudly for an unknown project', () => {
    expect(() => resolveCaseStudy({ project: 'missing' })).toThrow("No project configuration for case study 'missing'");
  });
});

it('resolves Accident & Health through the shared page in professional sequence', () => {
  const route = NRI_NA_ROUTES.find(({ path }) => path === 'accident-health');
  const config = resolveCaseStudy(route?.data as CaseStudyRouteData);
  expect(config.title).toBe('Accident & Health');
  expect(config.companyKey).toBe('nri-na');
  expect(config.casePanel?.status).toBe('In development');
  const sequence = ['mulesoft-migrator', 'underwriting-workbench', 'farmlink-modernization', 'accident-health'];
  expect(NRI_NA_ROUTES.filter((route) => sequence.includes(route.path ?? '')).map((route) => route.path)).toEqual(
    sequence
  );
});
