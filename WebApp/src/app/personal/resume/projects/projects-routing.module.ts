import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectsComponent,
    children: [
      {
        path: 'west',
        loadChildren: () =>
          import('./west/west.module').then((m) => m.WestModule),
      },
      {
        path: 'skyline',
        loadChildren: () =>
          import('./skyline/skyline.module').then((m) => m.SkylineModule),
      },
      {
        path: 'personal',
        loadChildren: () =>
          import('./personal/personal.module').then((m) => m.PersonalModule),
      },
      {
        path: 'geeksquad',
        loadChildren: () =>
          import('./geeksquad/geeksquad.module').then((m) => m.GeeksquadModule),
      },
      {
        path: 'corebts',
        loadChildren: () =>
          import('./corebts/corebts.module').then((m) => m.CorebtsModule),
      },
    ],
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectsRoutingModule {}
