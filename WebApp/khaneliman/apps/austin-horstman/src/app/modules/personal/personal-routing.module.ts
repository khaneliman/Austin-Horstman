import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { PersonalComponent } from './personal.component';

const routes: Routes = [
  {
    path: '',
    component: PersonalComponent,
    children: [
      {
        path: 'resume',
        component: ResumeComponent,
      },
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent },
      {
        path: 'education',
        loadChildren: () =>
          import('./pages/education/education.module').then(
            (m) => m.EducationModule
          ),
      },
      {
        path: 'employment',
        loadChildren: () =>
          import('./pages/employment/employment.module').then(
            (m) => m.EmploymentModule
          ),
      },
      { path: '**', redirectTo: 'about', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonalRoutingModule {}
