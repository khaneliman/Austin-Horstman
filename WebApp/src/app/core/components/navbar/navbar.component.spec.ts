import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { Location } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { Component } from '@angular/core';

import { NavbarComponent } from './navbar.component';

@Component({ template: '' })
class MockComponent {}

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let location: Location;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [
        RouterTestingModule.withRoutes([
          { path: 'home', component: MockComponent },
          { path: 'personal', component: MockComponent },
          { path: 'projects', component: MockComponent },
        ]),
        NavbarComponent,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    location = TestBed.inject(Location);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with collapsed state', () => {
    expect(component.isCollapsed).toBe(true);
    expect(component.isPersonalDropdownOpen).toBe(false);
    expect(component.isProjectsDropdownOpen).toBe(false);
    expect(component.isMobileMenuOpen).toBe(false);
  });

  describe('dropdown functionality', () => {
    it('should toggle personal dropdown', () => {
      component.togglePersonalDropdown();
      expect(component.isPersonalDropdownOpen).toBe(true);
      expect(component.isProjectsDropdownOpen).toBe(false);

      component.togglePersonalDropdown();
      expect(component.isPersonalDropdownOpen).toBe(false);
    });

    it('should toggle projects dropdown', () => {
      component.toggleProjectsDropdown();
      expect(component.isProjectsDropdownOpen).toBe(true);
      expect(component.isPersonalDropdownOpen).toBe(false);

      component.toggleProjectsDropdown();
      expect(component.isProjectsDropdownOpen).toBe(false);
    });

    it('should close all dropdowns', () => {
      component.isPersonalDropdownOpen = true;
      component.isProjectsDropdownOpen = true;

      component.closeDropdowns();

      expect(component.isPersonalDropdownOpen).toBe(false);
      expect(component.isProjectsDropdownOpen).toBe(false);
    });

    it('should close other dropdown when opening one', () => {
      component.isProjectsDropdownOpen = true;
      component.togglePersonalDropdown();

      expect(component.isPersonalDropdownOpen).toBe(true);
      expect(component.isProjectsDropdownOpen).toBe(false);
    });
  });

  describe('mobile menu functionality', () => {
    it('should toggle mobile menu', () => {
      component.toggleMobileMenu();
      expect(component.isMobileMenuOpen).toBe(true);

      component.toggleMobileMenu();
      expect(component.isMobileMenuOpen).toBe(false);
    });

    it('should close mobile menu', () => {
      component.isMobileMenuOpen = true;
      component.closeMobileMenu();
      expect(component.isMobileMenuOpen).toBe(false);
    });
  });

  describe('route detection', () => {
    it('should detect home route', () => {
      jest.spyOn(location, 'prepareExternalUrl').mockReturnValue('#/home');
      expect(component.isHome()).toBe(true);
    });

    it('should detect non-home route', () => {
      jest.spyOn(location, 'prepareExternalUrl').mockReturnValue('#/other');
      expect(component.isHome()).toBe(false);
    });

    it('should detect documentation route', () => {
      jest
        .spyOn(location, 'prepareExternalUrl')
        .mockReturnValue('#/documentation');
      expect(component.isDocumentation()).toBe(true);
    });

    it('should detect non-documentation route', () => {
      jest.spyOn(location, 'prepareExternalUrl').mockReturnValue('#/other');
      expect(component.isDocumentation()).toBe(false);
    });
  });

  describe('cleanup', () => {
    it('should clean up subscriptions on destroy', () => {
      const destroySpy = jest.spyOn(component['destroy$'], 'next');
      const completeSpy = jest.spyOn(component['destroy$'], 'complete');

      component.ngOnDestroy();

      expect(destroySpy).toHaveBeenCalled();
      expect(completeSpy).toHaveBeenCalled();
    });
  });
});
