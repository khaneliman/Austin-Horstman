import { Routes } from '@angular/router';
import { SkylineComponent } from './skyline.component';
import { MileOfMusicComponent } from './mile-of-music/mile-of-music.component';

export const SKYLINE_ROUTES: Routes = [
  {
    path: '',
    component: SkylineComponent,
    children: [{ path: 'mile-of-music', component: MileOfMusicComponent }],
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
