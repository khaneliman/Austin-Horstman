import { describe, it, expect, beforeEach } from 'bun:test';
import { generatePersonalProjectsGrid } from './personal-projects';

describe('Personal Projects Data', () => {
  let projects: ReturnType<typeof generatePersonalProjectsGrid>;

  beforeEach(() => {
    projects = generatePersonalProjectsGrid();
  });

  it('should generate personal projects array', () => {
    expect(Array.isArray(projects)).toBe(true);
    expect(projects.length).toBeGreaterThan(0);
  });

  it('should have valid project structure', () => {
    projects.forEach(project => {
      expect(project).toHaveProperty('id');
      expect(project).toHaveProperty('title');
      expect(project).toHaveProperty('description');
      expect(project).toHaveProperty('category');
      expect(project).toHaveProperty('technologies');
      expect(project).toHaveProperty('featured');
      expect(project).toHaveProperty('status');
      expect(project).toHaveProperty('startDate');

      expect(typeof project.id).toBe('string');
      expect(typeof project.title).toBe('string');
      expect(typeof project.description).toBe('string');
      expect(typeof project.category).toBe('string');
      expect(typeof project.featured).toBe('boolean');
      expect(typeof project.status).toBe('string');
      expect(typeof project.startDate).toBe('string');

      expect(Array.isArray(project.technologies)).toBe(true);
      expect(project.technologies.length).toBeGreaterThan(0);
    });
  });

  it('should have unique project IDs', () => {
    const ids = projects.map(project => project.id);
    const uniqueIds = new Set(ids);
    expect(ids.length).toBe(uniqueIds.size);
  });

  it('should have valid sub-projects structure', () => {
    projects.forEach(project => {
      if (project.projects) {
        expect(Array.isArray(project.projects)).toBe(true);

        project.projects.forEach(subProject => {
          expect(subProject).toHaveProperty('name');
          expect(subProject).toHaveProperty('description');
          expect(subProject).toHaveProperty('route');
          expect(subProject).toHaveProperty('technologies');

          expect(typeof subProject.name).toBe('string');
          expect(typeof subProject.description).toBe('string');
          expect(typeof subProject.route).toBe('string');
          expect(Array.isArray(subProject.technologies)).toBe(true);
        });
      }
    });
  });

  it('should have valid date formats', () => {
    projects.forEach(project => {
      // Should be in YYYY-MM format
      expect(project.startDate).toMatch(/^\d{4}-\d{2}$/);
    });
  });

  it('should have meaningful descriptions', () => {
    projects.forEach(project => {
      expect(project.description.length).toBeGreaterThan(50);
      expect(project.title.length).toBeGreaterThan(5);
    });
  });

  it('should have valid URLs when present', () => {
    projects.forEach(project => {
      if (project.githubUrl) {
        expect(project.githubUrl.startsWith('https://github.com/')).toBe(true);
      }
      if (project.liveUrl) {
        expect(project.liveUrl.startsWith('http')).toBe(true);
      }
    });
  });

  it('should have highlights when present', () => {
    projects.forEach(project => {
      if (project.highlights) {
        expect(Array.isArray(project.highlights)).toBe(true);
        expect(project.highlights.length).toBeGreaterThan(0);

        project.highlights.forEach(highlight => {
          expect(typeof highlight).toBe('string');
          expect(highlight.length).toBeGreaterThan(0);
        });
      }
    });
  });

  it('should have featured projects', () => {
    const featuredProjects = projects.filter(project => project.featured);
    expect(featuredProjects.length).toBeGreaterThan(0);
  });

  it('should have diverse categories', () => {
    const categories = new Set(projects.map(project => project.category));
    expect(categories.size).toBeGreaterThan(1);
  });

  it('should include expected technologies', () => {
    const allTechnologies = projects.flatMap(project => project.technologies);

    // Should include key technologies
    expect(allTechnologies).toContain('Nix');
    expect(allTechnologies).toContain('Angular');
    expect(allTechnologies).toContain('TypeScript');
  });

  describe('specific project validations', () => {
    it('should have Nix ecosystem project', () => {
      const nixProject = projects.find(p => p.id === 'nix-ecosystem');
      expect(nixProject).toBeDefined();
      expect(nixProject!.technologies).toContain('Nix');
      expect(nixProject!.featured).toBe(true);
    });

    it('should have portfolio website project', () => {
      const portfolioProject = projects.find(p => p.id === 'portfolio-website');
      expect(portfolioProject).toBeDefined();
      expect(portfolioProject!.technologies).toContain('Angular');
      expect(portfolioProject!.liveUrl).toBe('https://austinhorstman.com');
    });
  });
});
