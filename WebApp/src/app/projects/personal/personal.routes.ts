import { Routes } from '@angular/router';
import { PersonalComponent } from './personal.component';

export const PERSONAL_PROJECTS_ROUTES: Routes = [
  {
    path: '',
    component: PersonalComponent,
  },
  {
    path: 'home-manager',
    loadComponent: () => import('./home-manager/home-manager.component').then((m) => m.HomeManagerComponent),
  },
  {
    path: 'nixvim',
    loadComponent: () => import('./nixvim/nixvim.component').then((m) => m.NixvimComponent),
  },
  {
    path: 'nixpkgs',
    loadComponent: () => import('./nixpkgs/nixpkgs.component').then((m) => m.NixpkgsComponent),
  },
  {
    path: 'khanelinix',
    loadComponent: () => import('./khanelinix/khanelinix.component').then((m) => m.KhanelinixComponent),
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
