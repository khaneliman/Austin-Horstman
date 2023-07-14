import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoxvalleyComponent } from './pages/foxvalley/foxvalley.component';
import { EducationComponent } from './education.component';

const routes: Routes = [
  {
    path: '',
    component: EducationComponent,
    children: [{ path: 'foxvalley', component: FoxvalleyComponent }],
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EducationRoutingModule {}
