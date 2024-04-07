import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WestRoutingModule } from './west-routing.module';
import { WestComponent } from './west.component';

@NgModule({
    imports: [CommonModule, WestRoutingModule, WestComponent],
})
export class WestModule {}
