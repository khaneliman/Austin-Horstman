import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CsharpComponent } from './csharp/csharp.component';
import { TechnologyComponent } from './technology.component';

const routes: Routes = [
  {
    path: '', component: TechnologyComponent,
    children: [
      {
        path: 'csharp',
        component: CsharpComponent
      }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TechnologyRoutingModule { }
