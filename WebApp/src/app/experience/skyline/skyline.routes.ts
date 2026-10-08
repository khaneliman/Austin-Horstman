import { Routes } from '@angular/router';
import { SkylineComponent } from './skyline.component';

export const SKYLINE_ROUTES: Routes = [
  {
    path: '',
    title: 'Skyline Technologies Experience | Austin Horstman',
    data: { description: 'Austin Horstman’s professional experience at Skyline Technologies.' },
    component: SkylineComponent,
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
