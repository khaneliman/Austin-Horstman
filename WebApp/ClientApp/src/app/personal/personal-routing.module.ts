import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PersonalComponent } from './personal.component';

const routes: Routes = [
  {
    path: '',
    component: PersonalComponent,
    children: [
      { path: 'about', component: AboutComponent },
      { path: 'resume', loadChildren: () => import('./resume/resume.module').then(m => m.ResumeModule) },
      { path: 'contact', component: ContactComponent },
      { path: '', redirectTo: 'about', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonalRoutingModule { }
