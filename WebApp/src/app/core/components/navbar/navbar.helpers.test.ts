import { describe, expect, it } from 'bun:test';
import { isActiveRoute } from './navbar.helpers';

describe('isActiveRoute', () => {
  it('matches an exact route', () => {
    expect(isActiveRoute('/home', '/home', true)).toBe(true);
    expect(isActiveRoute('/home', '/personal', true)).toBe(false);
  });

  it('matches nested routes unless exact', () => {
    expect(isActiveRoute('/personal/resume/education', '/personal')).toBe(true);
    expect(isActiveRoute('/personal/resume/education', '/personal/resume')).toBe(true);
    expect(isActiveRoute('/personal/resume/education', '/personal/resume', true)).toBe(false);
  });

  it('does not treat a shared prefix as nesting', () => {
    expect(isActiveRoute('/projects-archive', '/projects')).toBe(false);
  });

  it('ignores the query string and fragment', () => {
    expect(isActiveRoute('/projects?tab=pro#section', '/projects', true)).toBe(true);
  });

  it('treats an empty path as /home', () => {
    expect(isActiveRoute('', '/home', true)).toBe(true);
  });
});
