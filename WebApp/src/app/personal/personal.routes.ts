import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

export const PERSONAL_ROUTES: Routes = [
  {
    path: '',
    title: 'About | Austin Horstman',
    data: { description: 'About Austin Horstman and his software development background.' },
    component: AboutComponent,
  },
  {
    path: 'resume',
    loadChildren: () => import('./resume/resume.routes').then((m) => m.RESUME_ROUTES),
  },
  {
    path: 'about',
    title: 'About | Austin Horstman',
    data: { description: 'About Austin Horstman and his software development background.' },
    component: AboutComponent,
  },
  {
    path: 'contact',
    title: 'Contact | Austin Horstman',
    data: { description: 'Contact Austin Horstman about software development and collaboration.' },
    component: ContactComponent,
  },
  { path: '**', redirectTo: 'about', pathMatch: 'full' },
];
