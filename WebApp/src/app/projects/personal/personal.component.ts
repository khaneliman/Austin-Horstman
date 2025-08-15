import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  heroUser,
  heroLightBulb,
  heroCodeBracket,
  heroCog6Tooth,
  heroFolder,
  heroGlobeAlt,
  heroBriefcase,
  heroComputerDesktop,
  heroArrowTopRightOnSquare,
  heroCheckCircle,
  heroWrench,
  heroDevicePhoneMobile,
  heroChevronRight,
} from '@ng-icons/heroicons/outline';
import { PersonalProjectsGridComponent } from '../../shared/components/personal-projects-grid/personal-projects-grid.component';
import { generatePersonalProjectsGrid } from '../../shared/data/personal-projects';
import { HeroSectionComponent } from '../../shared/components/hero-section/hero-section.component';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss'],
  imports: [
    RouterOutlet,
    RouterLink,
    NgIconComponent,
    PersonalProjectsGridComponent,
    HeroSectionComponent,
  ],
  providers: [
    provideIcons({
      heroUser,
      heroLightBulb,
      heroCodeBracket,
      heroCog6Tooth,
      heroFolder,
      heroGlobeAlt,
      heroBriefcase,
      heroComputerDesktop,
      heroArrowTopRightOnSquare,
      heroCheckCircle,
      heroWrench,
      heroDevicePhoneMobile,
      heroChevronRight,
    }),
  ],
})
export class PersonalComponent {
  personalProjects = generatePersonalProjectsGrid();

  heroTitle = 'Personal Projects & Open Source';
  heroSubtitle =
    'Individual software development projects, open source contributions, and personal portfolio applications showcasing continuous learning and technical exploration.';
  heroBadge = 'Personal Projects';
}
