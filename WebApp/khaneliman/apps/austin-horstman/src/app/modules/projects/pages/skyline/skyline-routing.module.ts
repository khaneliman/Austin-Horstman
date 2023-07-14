import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MileOfMusicComponent } from './mile-of-music/mile-of-music.component';
import { SkylineComponent } from './skyline.component';

const routes: Routes = [
  {
    path: '',
    component: SkylineComponent,
    children: [{ path: 'mile-of-music', component: MileOfMusicComponent }],
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SkylineRoutingModule {}
