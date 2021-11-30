import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WestRoutingModule } from './west-routing.module';
import { WestComponent } from './west.component';
import { SharedModule } from '../../../../shared/shared.module';

@NgModule({
  declarations: [WestComponent],
  imports: [CommonModule, SharedModule, WestRoutingModule],
})
export class WestModule {}
