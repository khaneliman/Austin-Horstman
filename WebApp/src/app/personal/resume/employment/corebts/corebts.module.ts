import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CorebtsRoutingModule } from './corebts-routing.module';
import { CorebtsComponent } from './corebts.component';

@NgModule({
    imports: [CommonModule, CorebtsRoutingModule, CorebtsComponent],
})
export class CorebtsModule {}
