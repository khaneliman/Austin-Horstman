import { Routes } from '@angular/router';
import { NriNaComponent } from './nri-na.component';

export const NRI_NA_ROUTES: Routes = [
  {
    path: '',
    title: 'NRI-NA Experience | Austin Horstman',
    data: { description: 'Austin Horstman’s professional experience at NRI-NA.' },
    component: NriNaComponent,
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
