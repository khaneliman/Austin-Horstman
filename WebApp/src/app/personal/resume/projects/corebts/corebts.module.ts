import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CorebtsRoutingModule } from './corebts-routing.module';
import { CorebtsComponent } from './corebts.component';
import { KrogerComponent } from './kroger/kroger.component';

@NgModule({
    imports: [CommonModule, CorebtsRoutingModule, CorebtsComponent, KrogerComponent],
})
export class CorebtsModule {}
