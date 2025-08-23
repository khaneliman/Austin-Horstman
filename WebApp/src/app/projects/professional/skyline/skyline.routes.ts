import { Routes } from '@angular/router';
import { SkylineComponent } from './skyline.component';
import { MileOfMusicComponent } from './mile-of-music/mile-of-music.component';
import { RenaissanceLearningComponent } from './renaissance-learning/renaissance-learning.component';
import { JjKellerComponent } from './jj-keller/jj-keller.component';
import { ExpressScriptsComponent } from './express-scripts/express-scripts.component';
import { CleartrendComponent } from './cleartrend/cleartrend.component';
import { NetworkHealthComponent } from './network-health/network-health.component';

export const SKYLINE_ROUTES: Routes = [
  {
    path: '',
    component: SkylineComponent,
    children: [
      {
        path: 'renaissance-learning',
        component: RenaissanceLearningComponent,
        data: { autoScroll: true },
      },
      {
        path: 'mile-of-music',
        component: MileOfMusicComponent,
        data: { autoScroll: true },
      },
      {
        path: 'jj-keller',
        component: JjKellerComponent,
        data: { autoScroll: true },
      },
      {
        path: 'express-scripts',
        component: ExpressScriptsComponent,
        data: { autoScroll: true },
      },
      {
        path: 'cleartrend',
        component: CleartrendComponent,
        data: { autoScroll: true },
      },
      {
        path: 'network-health',
        component: NetworkHealthComponent,
        data: { autoScroll: true },
      },
    ],
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
