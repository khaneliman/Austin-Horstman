import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CorebtsRoutingModule } from './corebts-routing.module';
import { CorebtsComponent } from './corebts.component';
import { SharedModule } from '../../../../shared/shared.module';

@NgModule({
  declarations: [CorebtsComponent],
  imports: [CommonModule, SharedModule, CorebtsRoutingModule],
})
export class CorebtsModule {}
