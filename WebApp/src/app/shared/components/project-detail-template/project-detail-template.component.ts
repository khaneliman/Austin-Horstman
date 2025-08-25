import { Component, Input } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  heroAcademicCap,
  heroArchiveBox,
  heroArrowDownTray,
  heroArrowLeft,
  heroArrowPath,
  heroArrowPathRoundedSquare,
  heroArrowUpTray,
  heroBeaker,
  heroBell,
  heroBolt,
  heroBookOpen,
  heroBuildingOffice2,
  heroCalendarDays,
  heroChartBar,
  heroChartBarSquare,
  heroChartPie,
  heroCheck,
  heroCircleStack,
  heroClipboardDocumentList,
  heroClock,
  heroCloud,
  heroCloudArrowDown,
  heroCloudArrowUp,
  heroCodeBracket,
  heroCog6Tooth,
  heroCog8Tooth,
  heroComputerDesktop,
  heroDevicePhoneMobile,
  heroDocumentArrowUp,
  heroDocumentText,
  heroGlobeAlt,
  heroHeart,
  heroIdentification,
  heroLightBulb,
  heroLink,
  heroListBullet,
  heroMagnifyingGlass,
  heroMapPin,
  heroPresentationChartLine,
  heroRectangleStack,
  heroRocketLaunch,
  heroScale,
  heroServer,
  heroShieldCheck,
  heroShoppingBag,
  heroSparkles,
  heroSpeakerWave,
  heroStar,
  heroTicket,
  heroTruck,
  heroUser,
  heroUserGroup,
  heroUsers,
  heroWifi,
  heroWrench,
} from '@ng-icons/heroicons/outline';
import { ProjectDetailConfig } from '../../interfaces/project-detail.interface';
import { BaseCardComponent } from '../base-card/base-card.component';
import { BulletListComponent, BulletListItem } from '../bullet-list/bullet-list.component';
import { Feature, FeatureGridComponent } from '../feature-grid/feature-grid.component';
import { ProjectNavHeaderComponent } from '../project-nav-header/project-nav-header.component';
import { SectionHeaderComponent } from '../section-header/section-header.component';
import { Stat, StatsGridComponent } from '../stats-grid/stats-grid.component';
import { TechTag, TechTagListComponent } from '../tech-tag-list/tech-tag-list.component';

@Component({
  selector: 'app-project-detail-template',
  standalone: true,
  imports: [
    NgIconComponent,
    ProjectNavHeaderComponent,
    BaseCardComponent,
    SectionHeaderComponent,
    TechTagListComponent,
    FeatureGridComponent,
    StatsGridComponent,
    BulletListComponent,
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
    return this.config.technologies.map((tech) => ({
      name: tech.name,
      color: tech.color || this.config.primaryColor,
    }));
  }

  get features(): Feature[] {
    return this.config.features.map((feature) => ({
      icon: feature.icon,
      title: feature.title,
      description: feature.description,
    }));
  }

  get stats(): Stat[] {
    if (!this.config.quickStats) return [];
    return this.config.quickStats.map((stat) => ({
      icon: stat.icon,
      value: stat.value,
      label: stat.label,
    }));
  }

  getTechTagsForHeader(): TechTag[] {
    return this.config.technologies.map((tech) => ({
      name: tech.name,
      color: 'white', // White color for header tags on colored background
    }));
  }

  getListItems(items?: string[]): BulletListItem[] {
    if (!items) return [];
    return items.map((item) => ({ text: item }));
  }
}
