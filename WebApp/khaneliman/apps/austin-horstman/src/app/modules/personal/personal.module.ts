import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalComponent } from './personal.component';
import { PersonalRoutingModule } from './personal-routing.module';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { SharedModule } from '@shared/shared.module';
import { ResumeComponent } from './pages/resume/resume.component';

@NgModule({
  declarations: [
    AboutComponent,
    ContactComponent,
    PersonalComponent,
    ResumeComponent,
  ],
  imports: [CommonModule, PersonalRoutingModule, SharedModule],
  exports: [
    AboutComponent,
    ContactComponent,
    PersonalComponent,
    ResumeComponent,
  ],
})
export class PersonalModule {}
