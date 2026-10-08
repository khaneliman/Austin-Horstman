import { Routes } from '@angular/router';
import { PersonalComponent } from './personal.component';

export const PERSONAL_PROJECTS_ROUTES: Routes = [
  {
    path: '',
    title: 'Personal Projects | Austin Horstman',
    data: { description: 'Explore Austin Horstman’s personal projects and open source contributions.' },
    component: PersonalComponent,
  },
  {
    path: 'home-manager',
    title: 'Home Manager | Austin Horstman',
    data: { description: 'Austin Horstman’s work on Home Manager.' },
    loadComponent: () => import('./home-manager/home-manager.component').then((m) => m.HomeManagerComponent),
  },
  {
    path: 'nixvim',
    title: 'Nixvim | Austin Horstman',
    data: { description: 'Austin Horstman’s work on Nixvim.' },
    loadComponent: () => import('./nixvim/nixvim.component').then((m) => m.NixvimComponent),
  },
  {
    path: 'nixpkgs',
    title: 'Nixpkgs | Austin Horstman',
    data: { description: 'Austin Horstman’s work on Nixpkgs.' },
    loadComponent: () => import('./nixpkgs/nixpkgs.component').then((m) => m.NixpkgsComponent),
  },
  {
    path: 'waybar',
    title: 'Waybar | Austin Horstman',
    data: { description: 'Austin Horstman’s work on Waybar.' },
    loadComponent: () => import('./waybar/waybar.component').then((m) => m.WaybarComponent),
  },
  {
    path: 'khanelinix',
    title: 'Khanelinix | Austin Horstman',
    data: { description: 'Austin Horstman’s work on Khanelinix.' },
    loadComponent: () => import('./khanelinix/khanelinix.component').then((m) => m.KhanelinixComponent),
  },
  {
    path: 'khanelivim',
    title: 'Khanelivim | Austin Horstman',
    data: { description: 'Austin Horstman’s work on Khanelivim.' },
    loadComponent: () => import('./khanelivim/khanelivim.component').then((m) => m.KhanelivimComponent),
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
