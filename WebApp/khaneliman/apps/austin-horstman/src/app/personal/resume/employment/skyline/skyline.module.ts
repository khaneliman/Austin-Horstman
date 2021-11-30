import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkylineRoutingModule } from './skyline-routing.module';
import { SkylineComponent } from './skyline.component';
import { SharedModule } from '../../../../shared/shared.module';

@NgModule({
  declarations: [SkylineComponent],
  imports: [CommonModule, SharedModule, SkylineRoutingModule],
})
export class SkylineModule {}
