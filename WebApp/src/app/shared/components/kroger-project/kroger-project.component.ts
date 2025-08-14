import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  heroShoppingBag,
  heroListBullet,
  heroCodeBracket,
  heroCog6Tooth,
  heroBeaker,
  heroLink,
  heroBuildingOffice,
  heroArchiveBox,
  heroGlobeAlt,
  heroArrowRight,
  heroCalendarDays,
  heroUsers,
  heroChartBarSquare,
  heroShieldCheck,
  heroCloud,
  heroCircleStack,
} from '@ng-icons/heroicons/outline';
import { ProjectNavHeaderComponent } from '../project-nav-header/project-nav-header.component';

@Component({
  selector: 'app-kroger-project',
  templateUrl: './kroger-project.component.html',
  styleUrls: ['./kroger-project.component.scss'],
  imports: [
    CommonModule,
    RouterModule,
    NgIconComponent,
    ProjectNavHeaderComponent,
  ],
  providers: [
    provideIcons({
      heroShoppingBag,
      heroListBullet,
      heroCodeBracket,
      heroCog6Tooth,
      heroBeaker,
      heroLink,
      heroBuildingOffice,
      heroArchiveBox,
      heroGlobeAlt,
      heroArrowRight,
      heroCalendarDays,
      heroUsers,
      heroChartBarSquare,
      heroShieldCheck,
      heroCloud,
      heroCircleStack,
    }),
  ],
})
export class KrogerProjectComponent {
  @Input() companyName!: string;
  @Input() companyKey!: string;
  @Input() dateRange!: string;
  @Input() backRoute!: string;
  @Input() backLabel!: string;
  @Input() hoverColor!: string;
  @Input() employmentRoute!: string;
  @Input() projectsRoute!: string;
}
