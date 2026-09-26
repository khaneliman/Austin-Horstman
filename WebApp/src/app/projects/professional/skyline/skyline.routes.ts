import { Routes } from '@angular/router';
import { caseStudyRoute } from '../case-study';

export const SKYLINE_ROUTES: Routes = [
  caseStudyRoute('renaissance-learning', { project: 'renaissance-learning' }),
  caseStudyRoute('mile-of-music', { project: 'mile-of-music' }),
  caseStudyRoute('jj-keller', { project: 'jj-keller' }),
  caseStudyRoute('express-scripts', { project: 'express-scripts' }),
  caseStudyRoute('cleartrend', { project: 'cleartrend' }),
  caseStudyRoute('network-health', { project: 'network-health' }),
  { path: '**', redirectTo: '/experience/skyline' },
];
