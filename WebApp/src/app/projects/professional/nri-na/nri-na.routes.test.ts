import '@angular/compiler';
import { describe, expect, it } from 'bun:test';
import { FarmLinkModernizationComponent } from './farmlink-modernization/farmlink-modernization.component';
import { NRI_NA_ROUTES } from './nri-na.routes';
import { UnderwritingWorkbenchComponent } from './underwriting-workbench/underwriting-workbench.component';

describe('NRI-NA routes', () => {
  it('should lazy-load the FarmLink modernization case study', async () => {
    const route = NRI_NA_ROUTES.find(({ path }) => path === 'farmlink-modernization');

    expect(route).toBeDefined();
    expect(route?.loadComponent).toBeFunction();

    if (!route?.loadComponent) {
      throw new Error('Missing FarmLink modernization route loader');
    }

    expect(await route.loadComponent()).toBe(FarmLinkModernizationComponent);
  });

  it('should lazy-load the Underwriting Workbench case study', async () => {
    const route = NRI_NA_ROUTES.find(({ path }) => path === 'underwriting-workbench');

    expect(route).toBeDefined();
    expect(route?.loadComponent).toBeFunction();

    if (!route?.loadComponent) {
      throw new Error('Missing Underwriting Workbench route loader');
    }

    expect(await route.loadComponent()).toBe(UnderwritingWorkbenchComponent);
  });
});
