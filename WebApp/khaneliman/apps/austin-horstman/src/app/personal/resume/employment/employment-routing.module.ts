import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmploymentComponent } from './employment.component';

const routes: Routes = [
  {
    path: '', component: EmploymentComponent, children: [
      { path: 'bestbuy', loadChildren: () => import('./bestbuy/bestbuy.module').then(m => m.BestbuyModule) },
      { path: 'corebts', loadChildren: () => import('./corebts/corebts.module').then(m => m.CorebtsModule) },
      { path: 'skyline', loadChildren: () => import('./skyline/skyline.module').then(m => m.SkylineModule) },
      { path: 'west', loadChildren: () => import('./west/west.module').then(m => m.WestModule) },
    ]
  },

  { path: '**', redirectTo: '', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmploymentRoutingModule { }
