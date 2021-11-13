import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { PersonalRoutingModule } from './personal-routing.module';
import { ContactComponent } from './contact/contact.component';
import { PersonalComponent } from './personal.component';
import { SharedModule } from '../shared/shared.module';
import { ResumeModule } from './resume/resume.module';

@NgModule({
  declarations: [
    AboutComponent,
    ContactComponent,
    PersonalComponent,
  ],
  imports: [
    CommonModule,
    PersonalRoutingModule,
    SharedModule,
    ResumeModule
  ],
  exports: [
    AboutComponent,
    ContactComponent,
    PersonalComponent
  ]
})
export class PersonalModule { }
