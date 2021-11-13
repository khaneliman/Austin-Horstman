import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalComponent } from './personal.component';
import { PersonalRoutingModule } from './personal-routing.module';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    AboutComponent,
    ContactComponent,
    PersonalComponent,
  ],
  imports: [
    CommonModule,
    PersonalRoutingModule,
    SharedModule
  ],
  exports: [
    AboutComponent,
    ContactComponent,
    PersonalComponent
  ]
})
export class PersonalModule { }
