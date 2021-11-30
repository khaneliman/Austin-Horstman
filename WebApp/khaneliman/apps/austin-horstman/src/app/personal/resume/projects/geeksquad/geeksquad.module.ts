import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeeksquadRoutingModule } from './geeksquad-routing.module';
import { GeeksquadComponent } from './geeksquad.component';
import { SharedModule } from '../../../../shared/shared.module';

@NgModule({
  declarations: [GeeksquadComponent],
  imports: [CommonModule, SharedModule, GeeksquadRoutingModule],
})
export class GeeksquadModule {}
