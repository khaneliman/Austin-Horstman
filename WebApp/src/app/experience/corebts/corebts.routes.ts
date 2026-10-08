import { Routes } from '@angular/router';
import { CorebtsComponent } from './corebts.component';

export const COREBTS_ROUTES: Routes = [
  {
    path: '',
    title: 'Core BTS Experience | Austin Horstman',
    data: { description: 'Austin Horstman’s professional experience at Core BTS.' },
    component: CorebtsComponent,
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
