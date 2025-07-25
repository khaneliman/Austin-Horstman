import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

export const PERSONAL_ROUTES: Routes = [
  { path: '', component: AboutComponent },
  {
    path: 'resume',
    loadChildren: () =>
      import('./resume/resume.routes').then(m => m.RESUME_ROUTES),
  },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: 'about', pathMatch: 'full' },
];
