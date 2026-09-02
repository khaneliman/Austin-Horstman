import { describe, expect, it } from 'bun:test';
import {
  generateProfessionalProjectsGrid,
  getProjectsForCompany,
  getResumeProjectCards,
  SHARED_PROJECTS,
} from './projects';

describe('Projects Data', () => {
  it('should have shared projects defined', () => {
    expect(SHARED_PROJECTS).toBeDefined();
    expect(typeof SHARED_PROJECTS).toBe('object');
    expect(Object.keys(SHARED_PROJECTS).length).toBeGreaterThan(0);
  });

  it('should get projects for valid company', () => {
    const projects = getProjectsForCompany('corebts');
    expect(Array.isArray(projects)).toBe(true);
    expect(projects.length).toBeGreaterThan(0);
  });

  it('should have valid project structure', () => {
    const projects = getProjectsForCompany('corebts');

    projects.forEach((project) => {
      expect(project).toHaveProperty('name');
      expect(project).toHaveProperty('route');
      expect(typeof project.name).toBe('string');
      expect(typeof project.route).toBe('string');
    });
  });

  it('should handle different companies', () => {
    const corebtsProjects = getProjectsForCompany('corebts');
    const skylineProjects = getProjectsForCompany('skyline');

    expect(Array.isArray(corebtsProjects)).toBe(true);
    expect(Array.isArray(skylineProjects)).toBe(true);
  });

  it('should use geeksquad route paths for Best Buy project grid links', () => {
    const projectsGrid = generateProfessionalProjectsGrid();
    const bestBuyGrid = projectsGrid.find((company) => company.company === 'Best Buy Geek Squad');

    expect(bestBuyGrid).toBeDefined();
    expect(bestBuyGrid?.projects[0]?.route).toBe('/projects/professional/geeksquad/stat-tracker');
  });

  it('should route company grid calls to canonical experience pages', () => {
    const projectsGrid = generateProfessionalProjectsGrid();

    projectsGrid.forEach((company) => {
      expect(company.route.startsWith('/experience/')).toBe(true);
    });
  });

  it('should expose FarmLink as an NRI-NA project card', () => {
    const farmLink = getResumeProjectCards().find((project) => project.title === 'FarmLink Modernization');

    expect(farmLink).toBeDefined();
    expect(farmLink?.route).toBe('/projects/professional/nri-na/farmlink-modernization');
    expect(farmLink?.technologies).toContain('Blazor');
    expect(farmLink?.technologies).toContain('Azure DevOps');
  });

  it('should expose the Underwriting Workbench as an NRI-NA project card', () => {
    const workbench = getResumeProjectCards().find((project) => project.title === 'Underwriting Workbench');

    expect(workbench).toBeDefined();
    expect(workbench?.route).toBe('/projects/professional/nri-na/underwriting-workbench');
    expect(workbench?.technologies).toContain('AI Classification');
    expect(workbench?.technologies).toContain('Data Enrichment');

    const profileProject = getProjectsForCompany('nri-na').find((project) => project.name === 'Underwriting Workbench');
    expect(profileProject?.status).toBe('Long-term');
  });
});
