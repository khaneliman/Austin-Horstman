import '@angular/compiler';
import { describe, expect, it } from 'bun:test';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { caseStudyRoute } from '../../projects/professional/case-study';
import { canonicalUrl, HOME_METADATA, resolveRouteMetadata } from './route-metadata';

function state(url: string, title?: string, description?: string): Pick<RouterStateSnapshot, 'root' | 'url'> {
  const root = new ActivatedRouteSnapshot();
  root.data = { description };
  Object.defineProperty(root, 'title', { value: title });
  Object.defineProperty(root, 'children', { value: [], configurable: true });
  return { root, url };
}

describe('route metadata', () => {
  it('canonicalizes aliases and strips catalogue filters, fragments, and matrix parameters', () => {
    expect(canonicalUrl('/home?company=nri-na#work')).toBe(canonicalUrl('/'));
    expect(canonicalUrl('/projects/professional;mode=grid?technology=Angular#results')).toBe(
      'https://austinhorstman.dev/projects/professional'
    );
    expect(canonicalUrl('/projects/personal?company=all')).toBe('https://austinhorstman.dev/projects/personal');
  });

  it('uses the deepest primary route and ignores named outlets', () => {
    const snapshot = state('/personal/resume', 'About', 'About description');
    const primary = state('/personal/resume', 'Resume', 'Resume description').root;
    primary.outlet = 'primary';
    const auxiliary = state('/personal/resume', 'Auxiliary', 'Auxiliary description').root;
    auxiliary.outlet = 'sidebar';
    Object.defineProperty(snapshot.root, 'children', { value: [auxiliary, primary] });
    expect(resolveRouteMetadata(snapshot)).toEqual({
      title: 'Resume',
      description: 'Resume description',
      canonical: 'https://austinhorstman.dev/personal/resume',
    });
  });

  it('derives lazy case metadata from the resolved configuration and company overrides', () => {
    const route = caseStudyRoute('example', {
      project: 'farmlink-modernization',
      overrides: { title: 'Company-specific title', description: 'Company-specific description', technologies: [] },
    });
    expect(route.title).toBe('Company-specific title | Austin Horstman');
    expect(route.data?.['description']).toBe('Company-specific description');
    expect(route.data?.['project']).toBe('farmlink-modernization');
  });

  it('resolves a case study and resets every route-dependent field on Home', () => {
    const route = caseStudyRoute('farmlink-modernization', { project: 'farmlink-modernization' });
    const project = resolveRouteMetadata(
      state(
        '/projects/professional/nri-na/farmlink-modernization?filter=x',
        String(route.title),
        route.data?.['description']
      )
    );
    expect(project.title).toContain('FarmLink');
    expect(project.description).not.toBe(HOME_METADATA.description);
    expect(project.canonical).not.toContain('?');
    expect(resolveRouteMetadata(state('/home'))).toEqual({
      ...HOME_METADATA,
      canonical: 'https://austinhorstman.dev/',
    });
  });
});
