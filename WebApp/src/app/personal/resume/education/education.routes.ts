import { Routes } from '@angular/router';
import { EducationComponent } from './education.component';
import { FoxvalleyComponent } from './foxvalley/foxvalley.component';

export const EDUCATION_ROUTES: Routes = [
  {
    path: '',
    title: 'Education | Austin Horstman',
    data: { description: 'Austin Horstman’s education.' },
    component: EducationComponent,
    children: [
      { path: '', redirectTo: 'foxvalley', pathMatch: 'full' },
      {
        path: 'foxvalley',
        title: 'Fox Valley Technical College | Austin Horstman',
        data: { description: 'Austin Horstman’s education at Fox Valley Technical College.' },
        component: FoxvalleyComponent,
      },
    ],
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
