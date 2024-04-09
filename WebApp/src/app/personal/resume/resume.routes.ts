import { Routes } from '@angular/router';
import { ResumeComponent } from './resume.component';

export const RESUME_ROUTES: Routes = [
  { path: '', component: ResumeComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
