import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  heroArrowLeft,
  heroCircleStack,
  heroCheckCircle,
  heroListBullet,
  heroCog6Tooth,
  heroChevronRight,
} from '@ng-icons/heroicons/outline';
import { ProjectNavHeaderComponent } from '../../../../shared/components/project-nav-header/project-nav-header.component';

@Component({
  standalone: true,
  selector: 'app-database-tool',
  templateUrl: './database-tool.component.html',
  styleUrls: ['./database-tool.component.scss'],
  imports: [RouterLink, NgIconComponent, ProjectNavHeaderComponent],
  providers: [
    provideIcons({
      heroArrowLeft,
      heroCircleStack,
      heroCheckCircle,
      heroListBullet,
      heroCog6Tooth,
      heroChevronRight,
    }),
  ],
})
export class DatabaseToolComponent {
  backRoute = '/projects/professional/west';
  backLabel = 'Back to West Projects';
  hoverColor = 'red';
  companyKey = 'west';
}
