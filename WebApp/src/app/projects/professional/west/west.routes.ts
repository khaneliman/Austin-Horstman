import { Routes } from '@angular/router';
import { caseStudyRoute } from '../case-study';

export const WEST_ROUTES: Routes = [
  caseStudyRoute('database-tool', { project: 'database-tool' }),
  caseStudyRoute('it-portal', { project: 'it-portal' }),
  caseStudyRoute('quick-launch', { project: 'quick-launch' }),
  { path: '**', redirectTo: '/experience/west' },
];
