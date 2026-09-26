import { Routes } from '@angular/router';
import { caseStudyRoute } from '../case-study';

export const GEEKSQUAD_ROUTES: Routes = [
  caseStudyRoute('stat-tracker', { project: 'stat-tracker' }),
  { path: '**', redirectTo: '/experience/bestbuy' },
];
