import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WestComponent } from './west.component';

const routes: Routes = [{ path: '', component: WestComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WestRoutingModule { }
