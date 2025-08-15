import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  heroArrowLeft,
  heroBookOpen,
  heroRocketLaunch,
  heroCircleStack,
  heroCodeBracket,
  heroComputerDesktop,
  heroCog6Tooth,
  heroLightBulb,
  heroChartBar,
  heroGlobeAlt,
  heroShieldCheck,
  heroBeaker,
  heroWrench,
  heroAcademicCap,
  heroUserGroup,
  heroCloudArrowUp,
  heroDocumentText,
  heroMagnifyingGlass,
  heroSparkles,
  heroServer,
  heroDevicePhoneMobile,
  heroClock,
  heroUser,
  heroBolt,
  heroWifi,
  heroCheck,
  heroRectangleStack,
  heroListBullet,
  heroTicket,
  heroLink,
} from '@ng-icons/heroicons/outline';

import { ProjectDetailConfig } from '../../interfaces/project-detail.interface';
import { ProjectNavHeaderComponent } from '../project-nav-header/project-nav-header.component';

@Component({
  selector: 'app-project-detail-template',
  standalone: true,
  imports: [CommonModule, NgIconComponent, ProjectNavHeaderComponent],
  providers: [
    provideIcons({
      heroArrowLeft,
      heroBookOpen,
      heroRocketLaunch,
      heroCircleStack,
      heroCodeBracket,
      heroComputerDesktop,
      heroCog6Tooth,
      heroLightBulb,
      heroChartBar,
      heroGlobeAlt,
      heroShieldCheck,
      heroBeaker,
      heroWrench,
      heroAcademicCap,
      heroUserGroup,
      heroCloudArrowUp,
      heroDocumentText,
      heroMagnifyingGlass,
      heroSparkles,
      heroServer,
      heroDevicePhoneMobile,
      heroClock,
      heroUser,
      heroBolt,
      heroWifi,
      heroCheck,
      heroRectangleStack,
      heroListBullet,
      heroTicket,
      heroLink,
    }),
  ],
  templateUrl: './project-detail-template.component.html',
  styleUrl: './project-detail-template.component.scss',
})
export class ProjectDetailTemplateComponent {
  @Input({ required: true }) config!: ProjectDetailConfig;
}
