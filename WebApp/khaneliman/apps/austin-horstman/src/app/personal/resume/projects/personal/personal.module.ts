import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalRoutingModule } from './personal-routing.module';
import { PersonalComponent } from './personal.component';
import { SharedModule } from '../../../../shared/shared.module';

@NgModule({
  declarations: [PersonalComponent],
  imports: [CommonModule, SharedModule, PersonalRoutingModule],
})
export class PersonalModule {}
