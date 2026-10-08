import { Routes } from '@angular/router';
import { WestComponent } from './west.component';

export const WEST_ROUTES: Routes = [
  {
    path: '',
    title: 'West Experience | Austin Horstman',
    data: { description: 'Austin Horstman’s professional experience at West.' },
    component: WestComponent,
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
