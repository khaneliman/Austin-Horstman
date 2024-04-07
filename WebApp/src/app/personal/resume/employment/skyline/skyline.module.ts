import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkylineRoutingModule } from './skyline-routing.module';
import { SkylineComponent } from './skyline.component';

@NgModule({
    imports: [CommonModule, SkylineRoutingModule, SkylineComponent],
})
export class SkylineModule {}
