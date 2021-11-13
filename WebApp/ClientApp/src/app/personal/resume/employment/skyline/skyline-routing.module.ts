import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkylineComponent } from './skyline.component';

const routes: Routes = [{ path: '', component: SkylineComponent },
{ path: '**', redirectTo: '', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkylineRoutingModule { }
