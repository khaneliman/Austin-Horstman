import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/shared.module';

import { SkylineRoutingModule } from './skyline-routing.module';
import { SkylineComponent } from './skyline.component';
import { JjKellerComponent } from './jj-keller/jj-keller.component';
import { ExpressScriptsComponent } from './express-scripts/express-scripts.component';
import { NetworkHealthComponent } from './network-health/network-health.component';
import { RenaissanceLearningComponent } from './renaissance-learning/renaissance-learning.component';
import { CleartrendComponent } from './cleartrend/cleartrend.component';

@NgModule({
  declarations: [
    SkylineComponent,
    JjKellerComponent,
    ExpressScriptsComponent,
    NetworkHealthComponent,
    RenaissanceLearningComponent,
    CleartrendComponent,
  ],
  imports: [CommonModule, SharedModule, SkylineRoutingModule],
})
export class SkylineModule {}
