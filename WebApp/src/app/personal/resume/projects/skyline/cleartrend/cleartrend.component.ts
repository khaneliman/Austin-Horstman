import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectNavHeaderComponent } from '../../../../../shared';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  heroChartPie,
  heroBuildingOffice2,
  heroStar,
  heroChartBar,
  heroDocumentText,
  heroChartLine,
  heroUsers,
  heroShieldCheck,
  heroCog6Tooth,
  heroCodeBracket,
} from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-cleartrend',
  templateUrl: './cleartrend.component.html',
  styleUrls: ['./cleartrend.component.scss'],
  standalone: true,
  imports: [RouterLink, ProjectNavHeaderComponent, NgIconComponent],
  providers: [
    provideIcons({
      heroChartPie,
      heroBuildingOffice2,
      heroStar,
      heroChartBar,
      heroDocumentText,
      heroChartLine,
      heroUsers,
      heroShieldCheck,
      heroCog6Tooth,
      heroCodeBracket,
    }),
  ],
})
export class CleartrendComponent {}
