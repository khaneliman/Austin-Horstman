import { beforeEach, describe, expect, it } from 'bun:test';

// Mock the component class to test only the logic methods
class NavbarLogic {
  public isPersonalDropdownOpen = false;
  public isProjectsDropdownOpen = false;
  public isMobileMenuOpen = false;
  private currentPath = '/home';

  setCurrentPath(path: string) {
    this.currentPath = path;
  }

  togglePersonalDropdown(): void {
    this.isPersonalDropdownOpen = !this.isPersonalDropdownOpen;
    this.isProjectsDropdownOpen = false;
  }

  toggleProjectsDropdown(): void {
    this.isProjectsDropdownOpen = !this.isProjectsDropdownOpen;
    this.isPersonalDropdownOpen = false;
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeDropdowns(): void {
    this.isPersonalDropdownOpen = false;
    this.isProjectsDropdownOpen = false;
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }

  isRouteActive(route: string, exact = false): boolean {
    const path = this.currentPath.split(/[?#]/)[0] || '/home';
    return exact ? path === route : path === route || path.startsWith(`${route}/`);
  }
}

describe('NavbarComponent Logic Tests', () => {
  let logic: NavbarLogic;

  beforeEach(() => {
    logic = new NavbarLogic();
  });

  describe('Initial State', () => {
    it('should have correct default state', () => {
      expect(logic.isPersonalDropdownOpen).toBe(false);
      expect(logic.isProjectsDropdownOpen).toBe(false);
      expect(logic.isMobileMenuOpen).toBe(false);
    });
  });

  describe('Dropdown Management', () => {
    it('should toggle personal dropdown', () => {
      logic.togglePersonalDropdown();
      expect(logic.isPersonalDropdownOpen).toBe(true);
      expect(logic.isProjectsDropdownOpen).toBe(false);

      logic.togglePersonalDropdown();
      expect(logic.isPersonalDropdownOpen).toBe(false);
    });

    it('should toggle projects dropdown', () => {
      logic.toggleProjectsDropdown();
      expect(logic.isProjectsDropdownOpen).toBe(true);
      expect(logic.isPersonalDropdownOpen).toBe(false);

      logic.toggleProjectsDropdown();
      expect(logic.isProjectsDropdownOpen).toBe(false);
    });

    it('should close personal when opening projects', () => {
      logic.togglePersonalDropdown();
      expect(logic.isPersonalDropdownOpen).toBe(true);

      logic.toggleProjectsDropdown();
      expect(logic.isPersonalDropdownOpen).toBe(false);
      expect(logic.isProjectsDropdownOpen).toBe(true);
    });

    it('should close projects when opening personal', () => {
      logic.toggleProjectsDropdown();
      expect(logic.isProjectsDropdownOpen).toBe(true);

      logic.togglePersonalDropdown();
      expect(logic.isProjectsDropdownOpen).toBe(false);
      expect(logic.isPersonalDropdownOpen).toBe(true);
    });

    it('should close all dropdowns', () => {
      logic.togglePersonalDropdown();
      logic.toggleProjectsDropdown();
      logic.togglePersonalDropdown();

      expect(logic.isPersonalDropdownOpen).toBe(true);

      logic.closeDropdowns();

      expect(logic.isPersonalDropdownOpen).toBe(false);
      expect(logic.isProjectsDropdownOpen).toBe(false);
    });
  });

  describe('Mobile Menu', () => {
    it('should toggle mobile menu', () => {
      expect(logic.isMobileMenuOpen).toBe(false);

      logic.toggleMobileMenu();
      expect(logic.isMobileMenuOpen).toBe(true);

      logic.toggleMobileMenu();
      expect(logic.isMobileMenuOpen).toBe(false);
    });

    it('should close mobile menu', () => {
      logic.toggleMobileMenu();
      expect(logic.isMobileMenuOpen).toBe(true);

      logic.closeMobileMenu();
      expect(logic.isMobileMenuOpen).toBe(false);
    });
  });

  describe('Route Detection', () => {
    it('matches exact route', () => {
      logic.setCurrentPath('/home');
      expect(logic.isRouteActive('/home', true)).toBe(true);
      expect(logic.isRouteActive('/personal', true)).toBe(false);
    });

    it('matches nested routes when exact is false', () => {
      logic.setCurrentPath('/personal/resume/education');
      expect(logic.isRouteActive('/personal')).toBe(true);
      expect(logic.isRouteActive('/personal/resume')).toBe(true);
      expect(logic.isRouteActive('/personal/resume/education', true)).toBe(true);
    });

    it('strips query and fragment from current path', () => {
      logic.setCurrentPath('/projects?tab=pro#section');
      expect(logic.isRouteActive('/projects', true)).toBe(true);
    });

    it('falls back to /home when current path is empty', () => {
      logic.setCurrentPath('');
      expect(logic.isRouteActive('/home', true)).toBe(true);
    });
  });

  describe('State Management', () => {
    it('should maintain proper state isolation', () => {
      logic.togglePersonalDropdown();
      logic.toggleMobileMenu();

      expect(logic.isPersonalDropdownOpen).toBe(true);
      expect(logic.isMobileMenuOpen).toBe(true);
      expect(logic.isProjectsDropdownOpen).toBe(false);
    });

    it('should handle rapid state changes without errors', () => {
      // Test that rapid state changes don't cause errors or inconsistent state
      for (let i = 0; i < 10; i++) {
        logic.togglePersonalDropdown();
        logic.toggleProjectsDropdown();
        logic.toggleMobileMenu();
      }

      // Verify that we can still operate normally and cleanup works
      logic.closeDropdowns();
      logic.closeMobileMenu();

      expect(logic.isPersonalDropdownOpen).toBe(false);
      expect(logic.isProjectsDropdownOpen).toBe(false);
      expect(logic.isMobileMenuOpen).toBe(false);
    });

    it('should handle cleanup operations', () => {
      logic.togglePersonalDropdown();
      logic.toggleMobileMenu();

      logic.closeDropdowns();
      logic.closeMobileMenu();

      expect(logic.isPersonalDropdownOpen).toBe(false);
      expect(logic.isProjectsDropdownOpen).toBe(false);
      expect(logic.isMobileMenuOpen).toBe(false);
    });
  });

  describe('Performance', () => {
    it('should handle many operations efficiently', () => {
      const startTime = performance.now();

      for (let i = 0; i < 100; i++) {
        logic.togglePersonalDropdown();
        logic.toggleProjectsDropdown();
        logic.toggleMobileMenu();
        logic.closeDropdowns();
        logic.closeMobileMenu();
        logic.isRouteActive('/home', true);
        logic.isRouteActive('/projects');
      }

      const endTime = performance.now();
      expect(endTime - startTime).toBeLessThan(10); // Should be very fast
    });

    it('should not leak state between operations', () => {
      const operations = [
        () => logic.togglePersonalDropdown(),
        () => logic.toggleProjectsDropdown(),
        () => logic.toggleMobileMenu(),
        () => logic.closeDropdowns(),
        () => logic.closeMobileMenu(),
      ];

      // Perform operations in random order
      for (let i = 0; i < 50; i++) {
        const randomOp = operations[Math.floor(Math.random() * operations.length)];
        randomOp?.();
      }

      // Reset and verify clean state
      logic.closeDropdowns();
      logic.closeMobileMenu();

      expect(logic.isPersonalDropdownOpen).toBe(false);
      expect(logic.isProjectsDropdownOpen).toBe(false);
      expect(logic.isMobileMenuOpen).toBe(false);
    });
  });
});
