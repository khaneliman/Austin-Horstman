import { Routes } from '@angular/router';
import { caseStudyRoute } from '../case-study';

export const COREBTS_ROUTES: Routes = [
  caseStudyRoute('kroger', { project: 'kroger-solutions' }),
  caseStudyRoute('doitbest', { project: 'doitbest-platform' }),
  { path: '**', redirectTo: '/experience/corebts' },
];
