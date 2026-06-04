import { Routes } from '@angular/router';
import { EducationComponent } from './education.component';
import { FoxvalleyComponent } from './foxvalley/foxvalley.component';

export const EDUCATION_ROUTES: Routes = [
  {
    path: '',
    component: EducationComponent,
    children: [
      { path: '', redirectTo: 'foxvalley', pathMatch: 'full' },
      { path: 'foxvalley', component: FoxvalleyComponent },
    ],
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
