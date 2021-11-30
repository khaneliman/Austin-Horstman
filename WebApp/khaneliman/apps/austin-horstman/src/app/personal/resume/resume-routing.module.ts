import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResumeComponent } from './resume.component';

const routes: Routes = [
  { path: '', component: ResumeComponent },
  {
    path: 'employment',
    loadChildren: () =>
      import('./employment/employment.module').then((m) => m.EmploymentModule),
  },
  {
    path: 'education',
    loadChildren: () =>
      import('./education/education.module').then((m) => m.EducationModule),
  },
  {
    path: 'projects',
    loadChildren: () =>
      import('./projects/projects.module').then((m) => m.ProjectsModule),
  },
  {
    path: 'technology',
    loadChildren: () =>
      import('./technology/technology.module').then((m) => m.TechnologyModule),
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResumeRoutingModule {}
