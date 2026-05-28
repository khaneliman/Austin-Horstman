import { Routes } from '@angular/router';
import { ResumeComponent } from './resume.component';

export const RESUME_ROUTES: Routes = [
  { path: '', component: ResumeComponent },

  // TODO: Remove these legacy employment redirects after old shared links/search results have aged out.
  {
    path: 'employment/bestbuy',
    redirectTo: '/experience/bestbuy',
    pathMatch: 'full',
  },
  {
    path: 'employment/corebts',
    redirectTo: '/experience/corebts',
    pathMatch: 'full',
  },
  {
    path: 'employment/skyline',
    redirectTo: '/experience/skyline',
    pathMatch: 'full',
  },
  {
    path: 'employment/nri-na',
    redirectTo: '/experience/nri-na',
    pathMatch: 'full',
  },
  {
    path: 'employment/west',
    redirectTo: '/experience/west',
    pathMatch: 'full',
  },
  {
    path: 'employment',
    redirectTo: '/personal/resume',
    pathMatch: 'full',
  },
  {
    path: 'education',
    loadChildren: () => import('./education/education.routes').then((m) => m.EDUCATION_ROUTES),
  },
  {
    path: 'technology',
    loadChildren: () => import('./technology/technology.routes').then((m) => m.TECHNOLOGY_ROUTES),
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
