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
  heroChartPie,
  heroTruck,
  heroCog8Tooth,
  heroSpeakerWave,
  heroMapPin,
  heroArrowPath,
  heroBell,
  heroCloudArrowDown,
  heroIdentification,
  heroClipboardDocumentList,
  heroHeart,
  heroBuildingOffice2,
  heroPresentationChartLine,
  heroUsers,
  heroShoppingBag,
  heroArchiveBox,
  heroCloud,
  heroArrowUpTray,
  heroArrowDownTray,
  heroArrowPathRoundedSquare,
  heroDocumentArrowUp,
  heroScale,
  heroChartBarSquare,
  heroStar,
  heroCalendarDays,
} from '@ng-icons/heroicons/outline';

import { ProjectDetailConfig } from '../../interfaces/project-detail.interface';
import { ProjectNavHeaderComponent } from '../project-nav-header/project-nav-header.component';
import { BaseCardComponent } from '../base-card/base-card.component';
import { SectionHeaderComponent } from '../section-header/section-header.component';
import {
  TechTagListComponent,
  TechTag,
} from '../tech-tag-list/tech-tag-list.component';
import {
  FeatureGridComponent,
  Feature,
} from '../feature-grid/feature-grid.component';
import { StatsGridComponent, Stat } from '../stats-grid/stats-grid.component';

@Component({
  selector: 'app-project-detail-template',
  standalone: true,
  imports: [
    CommonModule,
    NgIconComponent,
    ProjectNavHeaderComponent,
    BaseCardComponent,
    SectionHeaderComponent,
    TechTagListComponent,
    FeatureGridComponent,
    StatsGridComponent,
  ],
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
      heroChartPie,
      heroTruck,
      heroCog8Tooth,
      heroSpeakerWave,
      heroMapPin,
      heroArrowPath,
      heroBell,
      heroCloudArrowDown,
      heroIdentification,
      heroClipboardDocumentList,
      heroHeart,
      heroBuildingOffice2,
      heroPresentationChartLine,
      heroUsers,
      heroArrowUpTray,
      heroArrowDownTray,
      heroArrowPathRoundedSquare,
      heroDocumentArrowUp,
      heroScale,
      heroChartBarSquare,
      heroShoppingBag,
      heroArchiveBox,
      heroCloud,
      heroStar,
      heroCalendarDays,
    }),
  ],
  templateUrl: './project-detail-template.component.html',
  styleUrl: './project-detail-template.component.scss',
})
export class ProjectDetailTemplateComponent {
  @Input({ required: true }) config!: ProjectDetailConfig;

  get techTags(): TechTag[] {
    return this.config.technologies.map(tech => ({
      name: tech.name,
      color: tech.color || this.config.primaryColor,
    }));
  }

  get features(): Feature[] {
    return this.config.features.map(feature => ({
      icon: feature.icon,
      title: feature.title,
      description: feature.description,
    }));
  }

  get stats(): Stat[] {
    if (!this.config.quickStats) return [];
    return this.config.quickStats.map(stat => ({
      icon: stat.icon,
      value: stat.value,
      label: stat.label,
    }));
  }

  getTechTagsForHeader(): TechTag[] {
    return this.config.technologies.map(tech => ({
      name: tech.name,
      color: 'white', // White color for header tags on colored background
    }));
  }
}
