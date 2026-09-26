import { Routes } from '@angular/router';
import { CleartrendComponent } from './cleartrend/cleartrend.component';
import { ExpressScriptsComponent } from './express-scripts/express-scripts.component';
import { JjKellerComponent } from './jj-keller/jj-keller.component';
import { MileOfMusicComponent } from './mile-of-music/mile-of-music.component';
import { NetworkHealthComponent } from './network-health/network-health.component';
import { RenaissanceLearningComponent } from './renaissance-learning/renaissance-learning.component';

export const SKYLINE_ROUTES: Routes = [
  {
    path: 'renaissance-learning',
    component: RenaissanceLearningComponent,
  },
  {
    path: 'mile-of-music',
    component: MileOfMusicComponent,
  },
  {
    path: 'jj-keller',
    component: JjKellerComponent,
  },
  {
    path: 'express-scripts',
    component: ExpressScriptsComponent,
  },
  {
    path: 'cleartrend',
    component: CleartrendComponent,
  },
  {
    path: 'network-health',
    component: NetworkHealthComponent,
  },
  { path: '**', redirectTo: '/experience/skyline' },
];
