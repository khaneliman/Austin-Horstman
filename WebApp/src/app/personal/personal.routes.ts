import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

export const PERSONAL_ROUTES: Routes = [
  { path: '', component: AboutComponent },
  {
    path: 'resume',
    loadChildren: () =>
      import('./resume/resume.routes').then((m) => m.RESUME_ROUTES),
  },
  {
    path: 'education',
    loadChildren: () =>
      import('./education/education.routes').then((m) => m.EDUCATION_ROUTES),
  },
  {
    path: 'employment',
    loadChildren: () =>
      import('./employment/employment.routes').then((m) => m.EMPLOYMENT_ROUTES),
  },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: 'about', pathMatch: 'full' },
];
