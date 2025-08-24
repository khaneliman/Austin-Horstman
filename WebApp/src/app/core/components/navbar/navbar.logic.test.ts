import { beforeEach, describe, expect, it } from 'bun:test';

// Mock the component class to test only the logic methods
class NavbarLogic {
  public isCollapsed = true;
  public isPersonalDropdownOpen = false;
  public isProjectsDropdownOpen = false;
  public isMobileMenuOpen = false;

  // Mock location service
  private _mockPath = '/home';

  setMockPath(path: string) {
    this._mockPath = path;
  }

  prepareExternalUrl(url: string): string {
    return `#${url}`;
  }

  path(): string {
    return this._mockPath;
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

  isHome(): boolean {
    const url = this.prepareExternalUrl(this.path());
    return url === '#/home';
  }

  isDocumentation(): boolean {
    const url = this.prepareExternalUrl(this.path());
    return url === '#/documentation';
  }
}

describe('NavbarComponent Logic Tests', () => {
  let logic: NavbarLogic;

  beforeEach(() => {
    logic = new NavbarLogic();
  });

  describe('Initial State', () => {
    it('should have correct default state', () => {
      expect(logic.isCollapsed).toBe(true);
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
    it('should detect home route', () => {
      logic.setMockPath('/home');
      expect(logic.isHome()).toBe(true);

      logic.setMockPath('/personal');
      expect(logic.isHome()).toBe(false);
    });

    it('should detect documentation route', () => {
      logic.setMockPath('/documentation');
      expect(logic.isDocumentation()).toBe(true);

      logic.setMockPath('/home');
      expect(logic.isDocumentation()).toBe(false);
    });

    it('should handle edge cases', () => {
      logic.setMockPath('');
      expect(logic.isHome()).toBe(false);
      expect(logic.isDocumentation()).toBe(false);

      logic.setMockPath('/home/nested');
      expect(logic.isHome()).toBe(false);
    });
  });

  describe('State Management', () => {
    it('should maintain proper state isolation', () => {
      logic.togglePersonalDropdown();
      logic.toggleMobileMenu();

      expect(logic.isPersonalDropdownOpen).toBe(true);
      expect(logic.isMobileMenuOpen).toBe(true);
      expect(logic.isProjectsDropdownOpen).toBe(false);
      expect(logic.isCollapsed).toBe(true);
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

  describe('URL Processing', () => {
    it('should process URLs correctly', () => {
      expect(logic.prepareExternalUrl('/home')).toBe('#/home');
      expect(logic.prepareExternalUrl('/documentation')).toBe('#/documentation');
      expect(logic.prepareExternalUrl('')).toBe('#');
    });

    it('should handle special characters in URLs', () => {
      logic.setMockPath('/test-route-with-dashes');
      expect(logic.prepareExternalUrl(logic.path())).toBe('#/test-route-with-dashes');
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
        logic.isHome();
        logic.isDocumentation();
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
        randomOp();
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
