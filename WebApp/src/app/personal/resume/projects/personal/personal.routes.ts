import { Routes } from '@angular/router';
import { PersonalComponent } from './personal.component';

export const PERSONAL_ROUTES: Routes = [
  {
    path: '',
    component: PersonalComponent,
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
