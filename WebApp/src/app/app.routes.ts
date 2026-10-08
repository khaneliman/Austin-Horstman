import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: 'home',
    title: 'Austin Horstman - Full Stack Developer Portfolio',
    data: {
      description:
        'Austin Horstman - Full Stack Developer specializing in Angular, .NET, and modern web technologies. Professional portfolio showcasing enterprise projects and software development expertise.',
    },
    component: HomeComponent,
  },
  {
    path: 'now',
    title: 'Now | Austin Horstman',
    data: { description: 'Current work, interests, and updates from Austin Horstman.' },
    loadComponent: () => import('./now/now.component').then((m) => m.NowComponent),
  },
  {
    path: 'personal',
    loadChildren: () => import('./personal/personal.routes').then((m) => m.PERSONAL_ROUTES),
  },
  {
    path: 'projects',
    loadChildren: () => import('./projects/projects.routes').then((m) => m.PROJECTS_ROUTES),
  },
  {
    path: 'experience',
    loadChildren: () => import('./experience/experience.routes').then((m) => m.EXPERIENCE_ROUTES),
  },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
