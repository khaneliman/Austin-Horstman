import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeComponent } from './resume/resume.component';
import { AboutComponent } from './about/about.component';
import { PersonalRoutingModule } from './personal-routing.module';
import { ContactComponent } from './contact/contact.component';
import { PersonalComponent } from './personal.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    AboutComponent,
    ResumeComponent,
    ContactComponent,
    PersonalComponent
  ],
  imports: [
    CommonModule,
    PersonalRoutingModule,
    SharedModule
  ],
  exports: [
    AboutComponent,
    ContactComponent,
    ResumeComponent
  ]
})
export class PersonalModule { }
