import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  heroListBullet,
  heroCodeBracket,
  heroCog6Tooth,
  heroBeaker,
  heroLink,
  heroBuildingOffice,
  heroCalendarDays,
  heroArchiveBox,
  heroGlobeAlt,
  heroArrowRight,
  heroShoppingBag,
  heroUserGroup,
  heroShieldCheck,
  heroCloud,
  heroCircleStack,
} from '@ng-icons/heroicons/outline';
import { ProjectNavHeaderComponent } from '../project-nav-header/project-nav-header.component';

@Component({
  selector: 'app-doitbest-project',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    NgIconComponent,
    ProjectNavHeaderComponent,
  ],
  providers: [
    provideIcons({
      heroListBullet,
      heroCodeBracket,
      heroCog6Tooth,
      heroBeaker,
      heroLink,
      heroBuildingOffice,
      heroCalendarDays,
      heroArchiveBox,
      heroGlobeAlt,
      heroArrowRight,
      heroShoppingBag,
      heroUserGroup,
      heroShieldCheck,
      heroCloud,
      heroCircleStack,
    }),
  ],
  templateUrl: './doitbest-project.component.html',
  styleUrl: './doitbest-project.component.scss',
})
export class DoitbestProjectComponent {
  @Input() companyName!: string;
  @Input() companyKey!: string;
  @Input() dateRange!: string;
  @Input() backRoute!: string;
  @Input() backLabel!: string;
  @Input() hoverColor!: string;
  @Input() employmentRoute!: string;
  @Input() projectsRoute!: string;
}
