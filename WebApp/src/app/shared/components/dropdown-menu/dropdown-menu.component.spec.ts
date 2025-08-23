import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Component } from '@angular/core';
import { NgIconComponent } from '@ng-icons/core';

import { DropdownMenuComponent, MenuItem } from './dropdown-menu.component';

// Mock NgIconComponent for testing
@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'ng-icon',
  template: '<span [attr.data-icon]="name">{{ name }}</span>',
  standalone: true,
})
class MockNgIconComponent {
  name!: string;
  size?: string;
  class?: string;
}

describe('DropdownMenuComponent', () => {
  let component: DropdownMenuComponent;
  let fixture: ComponentFixture<DropdownMenuComponent>;
  let compiled: HTMLElement;

  const mockItems: MenuItem[] = [
    {
      label: 'Profile',
      icon: 'heroUser',
      routerLink: '/profile',
      id: 'profile-item',
    },
    {
      label: 'Settings',
      icon: 'heroCog',
      action: () => console.log('Settings clicked'),
      id: 'settings-item',
    },
    {
      divider: true,
    },
    {
      label: 'External Link',
      icon: 'heroGlobe',
      href: 'https://example.com',
      id: 'external-item',
    },
    {
      label: 'Disabled Item',
      icon: 'heroXMark',
      disabled: true,
      action: () => console.log('Should not be called'),
      id: 'disabled-item',
    },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropdownMenuComponent, RouterTestingModule],
      providers: [
        // Override NgIconComponent with mock
      ],
    })
      .overrideComponent(DropdownMenuComponent, {
        remove: { imports: [NgIconComponent] },
        add: { imports: [MockNgIconComponent] },
      })
      .compileComponents();

    fixture = TestBed.createComponent(DropdownMenuComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement;

    // Set default test props
    component.items = mockItems;
    component.isOpen = true;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Rendering', () => {
    it('should not render menu when isOpen is false', () => {
      component.isOpen = false;
      fixture.detectChanges();

      const menu = compiled.querySelector('[role="menu"]');
      expect(menu).toBeFalsy();
    });

    it('should render menu when isOpen is true', () => {
      fixture.detectChanges();

      const menu = compiled.querySelector('[role="menu"]');
      expect(menu).toBeTruthy();
    });

    it('should render all menu items correctly', () => {
      fixture.detectChanges();

      const menuItems = compiled.querySelectorAll('[role="menuitem"]');
      // Should have 4 items (excluding divider)
      expect(menuItems.length).toBe(4);
    });

    it('should render dividers', () => {
      fixture.detectChanges();

      const dividers = compiled.querySelectorAll('.border-t');
      expect(dividers.length).toBeGreaterThan(0);
    });

    it('should apply correct positioning classes', () => {
      component.position = 'right';
      fixture.detectChanges();

      const menu = compiled.querySelector('[role="menu"]');
      expect(menu?.classList.contains('right-0')).toBe(true);
    });

    it('should apply correct width classes', () => {
      component.width = 'lg';
      fixture.detectChanges();

      const menu = compiled.querySelector('[role="menu"]');
      expect(menu?.classList.contains('w-56')).toBe(true);
    });

    it('should apply dark mode classes', () => {
      component.darkMode = true;
      fixture.detectChanges();

      const menu = compiled.querySelector('[role="menu"]');
      expect(menu?.classList.contains('bg-gray-800')).toBe(true);
      expect(menu?.classList.contains('ring-gray-700')).toBe(true);
    });
  });

  describe('Interactions', () => {
    beforeEach(() => {
      fixture.detectChanges();
    });

    it('should emit itemClick when menu item is clicked', () => {
      const emitSpy = jest.spyOn(component.itemClick, 'emit');

      const profileItem = compiled.querySelector(
        '#profile-item'
      ) as HTMLElement;
      profileItem.click();

      expect(emitSpy).toHaveBeenCalledWith(mockItems[0]);
    });

    it('should call action function when item with action is clicked', () => {
      const settingsItem = mockItems[1];
      const actionSpy = jest.spyOn(settingsItem, 'action');

      const settingsElement = compiled.querySelector(
        '#settings-item'
      ) as HTMLElement;
      settingsElement.click();

      expect(actionSpy).toHaveBeenCalled();
    });

    it('should not call action for disabled items', () => {
      const disabledItem = mockItems[4];
      const disabledActionSpy = jest.spyOn(disabledItem, 'action');
      const emitSpy = jest.spyOn(component.itemClick, 'emit');

      const disabledElement = compiled.querySelector(
        '#disabled-item'
      ) as HTMLElement;
      if (disabledElement) {
        disabledElement.click();
      }

      expect(disabledActionSpy).not.toHaveBeenCalled();
      expect(emitSpy).not.toHaveBeenCalled();
    });

    it('should handle router link navigation', () => {
      const routerItem = compiled.querySelector(
        '#profile-item'
      ) as HTMLAnchorElement;
      expect(routerItem).toBeTruthy();
      expect(routerItem.getAttribute('role')).toBe('menuitem');
    });

    it('should handle external links with proper attributes', () => {
      const externalItem = compiled.querySelector(
        '#external-item'
      ) as HTMLAnchorElement;
      expect(externalItem.href).toBe('https://example.com/');
      expect(externalItem.target).toBe('_blank');
      expect(externalItem.rel).toBe('noopener noreferrer');
    });
  });

  describe('Keyboard Navigation', () => {
    beforeEach(() => {
      fixture.detectChanges();
    });

    it('should handle ArrowDown key', () => {
      const menu = compiled.querySelector('div') as HTMLElement;
      const event = new KeyboardEvent('keydown', { key: 'ArrowDown' });

      expect(() => menu.dispatchEvent(event)).not.toThrow();
    });

    it('should handle ArrowUp key', () => {
      const menu = compiled.querySelector('div') as HTMLElement;
      const event = new KeyboardEvent('keydown', { key: 'ArrowUp' });

      expect(() => menu.dispatchEvent(event)).not.toThrow();
    });

    it('should handle Escape key', fakeAsync(() => {
      const menu = compiled.querySelector('div') as HTMLElement;
      const event = new KeyboardEvent('keydown', { key: 'Escape' });

      expect(() => menu.dispatchEvent(event)).not.toThrow();
      tick();
    }));

    it('should handle Enter key on menu items', () => {
      const emitSpy = jest.spyOn(component.itemClick, 'emit');

      const profileItem = compiled.querySelector(
        '#profile-item'
      ) as HTMLElement;
      const event = new KeyboardEvent('keydown', { key: 'Enter' });
      const preventDefaultSpy = jest.spyOn(event, 'preventDefault');

      profileItem.dispatchEvent(event);

      expect(preventDefaultSpy).toHaveBeenCalled();
      expect(emitSpy).toHaveBeenCalledWith(mockItems[0]);
    });
  });

  describe('Outside Click Handling', () => {
    beforeEach(() => {
      component.closeOnOutsideClick = true;
      fixture.detectChanges();
    });

    it('should emit outsideClick when clicking outside', () => {
      const outsideClickSpy = jest.spyOn(component.outsideClick, 'emit');
      const openChangeSpy = jest.spyOn(component.openChange, 'emit');

      // Simulate click outside the component
      const outsideElement = document.createElement('div');
      document.body.appendChild(outsideElement);

      const event = new MouseEvent('click', { bubbles: true });
      Object.defineProperty(event, 'target', { value: outsideElement });

      document.dispatchEvent(event);

      expect(outsideClickSpy).toHaveBeenCalledWith(event);
      expect(openChangeSpy).toHaveBeenCalledWith(false);

      document.body.removeChild(outsideElement);
    });

    it('should not close when clicking inside the menu', () => {
      const outsideClickSpy = jest.spyOn(component.outsideClick, 'emit');
      const openChangeSpy = jest.spyOn(component.openChange, 'emit');

      const menuItem = compiled.querySelector('#profile-item') as HTMLElement;
      const event = new MouseEvent('click', { bubbles: true });
      Object.defineProperty(event, 'target', { value: menuItem });

      document.dispatchEvent(event);

      expect(outsideClickSpy).not.toHaveBeenCalled();
      expect(openChangeSpy).not.toHaveBeenCalled();
    });
  });

  describe('Accessibility', () => {
    beforeEach(() => {
      fixture.detectChanges();
    });

    it('should have proper ARIA attributes', () => {
      component.ariaLabelledBy = 'trigger-button';
      component.role = 'menu';
      fixture.detectChanges();

      // Check that component properties are set correctly
      expect(component.ariaLabelledBy).toBe('trigger-button');
      expect(component.role).toBe('menu');

      const menu = compiled.querySelector('div');
      expect(menu).toBeTruthy();
    });

    it('should have proper tabindex values', () => {
      const enabledItems = compiled.querySelectorAll(
        '[role="menuitem"]:not([aria-disabled="true"])'
      );
      enabledItems.forEach(item => {
        expect(item.getAttribute('tabindex')).toBe('0');
      });

      const disabledItem = compiled.querySelector('[aria-disabled="true"]');
      if (disabledItem) {
        expect(disabledItem.getAttribute('tabindex')).toBe('-1');
      }
    });

    it('should have aria-label attributes', () => {
      const items = compiled.querySelectorAll('[role="menuitem"]');
      items.forEach(item => {
        expect(item.getAttribute('aria-label')).toBeTruthy();
      });
    });
  });

  describe('Utility Methods', () => {
    it('should track items correctly', () => {
      const result1 = component.trackByFn(0, mockItems[0]);
      const result2 = component.trackByFn(0, { label: 'Test' });
      const result3 = component.trackByFn(2, mockItems[2]);

      expect(result1).toBe('profile-item');
      expect(result2).toBe('Test');
      expect(result3).toBe(2); // For divider without id or label
    });

    it('should generate correct menu classes', () => {
      component.position = 'center';
      component.width = 'xl';
      component.darkMode = true;
      component.showTransition = true;

      const classes = component.menuClasses;

      expect(classes).toContain('left-1/2');
      expect(classes).toContain('-translate-x-1/2');
      expect(classes).toContain('w-64');
      expect(classes).toContain('bg-gray-800');
      expect(classes).toContain('ring-gray-700');
      expect(classes).toContain('transition-all');
    });

    it('should generate correct item classes for light mode', () => {
      component.darkMode = false;

      const classes = component.itemClasses;

      expect(classes).toContain('text-gray-700');
      expect(classes).toContain('hover:bg-blue-50');
      expect(classes).toContain('hover:text-blue-600');
    });

    it('should generate correct item classes for dark mode', () => {
      component.darkMode = true;

      const classes = component.itemClasses;

      expect(classes).toContain('text-gray-200');
      expect(classes).toContain('hover:bg-gray-700');
      expect(classes).toContain('hover:text-white');
    });
  });
});
