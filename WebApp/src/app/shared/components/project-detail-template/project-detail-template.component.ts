import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  heroAcademicCap,
  heroArchiveBox,
  heroArrowDownTray,
  heroArrowLeft,
  heroArrowPath,
  heroArrowPathRoundedSquare,
  heroArrowUpTray,
  heroBanknotes,
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
  heroCheckCircle,
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
import { ProjectCaseStyle, ProjectDetailConfig } from '../../interfaces/project-detail.interface';
import { BaseCardComponent } from '../base-card/base-card.component';
import { BulletListComponent, BulletListItem } from '../bullet-list/bullet-list.component';
import { Feature, FeatureGridComponent } from '../feature-grid/feature-grid.component';
import { ProjectNavHeaderComponent } from '../project-nav-header/project-nav-header.component';
import { SectionHeaderComponent } from '../section-header/section-header.component';
import { TechTag, TechTagListComponent } from '../tech-tag-list/tech-tag-list.component';

@Component({
  selector: 'app-project-detail-template',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    NgIconComponent,
    ProjectNavHeaderComponent,
    BaseCardComponent,
    SectionHeaderComponent,
    TechTagListComponent,
    FeatureGridComponent,
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
      heroCheckCircle,
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
      heroBanknotes,
    }),
  ],
  templateUrl: './project-detail-template.component.html',
  styleUrl: './project-detail-template.component.scss',
})
export class ProjectDetailTemplateComponent {
  readonly config = input.required<ProjectDetailConfig>();

  get techTags(): TechTag[] {
    return this.config().technologies.map((tech) => ({
      name: tech.name,
      color: tech.color || this.config().primaryColor,
    }));
  }

  get features(): Feature[] {
    return this.config().features.map((feature) => ({
      icon: feature.icon,
      title: feature.title,
      description: feature.description,
    }));
  }

  getTechTagsForHeader(): TechTag[] {
    return this.config().technologies.map((tech) => ({
      name: tech.name,
      color: 'white', // White color for header tags on colored background
    }));
  }

  protected get themeClass() {
    const primaryColor = this.config().primaryColor;

    const accentClassMap: Record<string, string> = {
      amber: 'project-detail-template--orange',
      blue: 'project-detail-template--blue',
      green: 'project-detail-template--green',
      orange: 'project-detail-template--orange',
      purple: 'project-detail-template--purple',
      rose: 'project-detail-template--red',
      red: 'project-detail-template--red',
      yellow: 'project-detail-template--yellow',
      teal: 'project-detail-template--teal',
      emerald: 'project-detail-template--emerald',
      indigo: 'project-detail-template--blue',
      violet: 'project-detail-template--purple',
      default: 'project-detail-template--blue',
    };

    return accentClassMap[primaryColor] ?? accentClassMap['default'];
  }

  protected get mainClass() {
    return [
      'project-detail-template',
      'min-h-screen',
      'text-slate-950',
      'dark:bg-slate-950',
      'dark:text-slate-50',
      this.styleVariantClass,
      this.themeClass,
      this.config().backgroundGradient,
    ].join(' ');
  }

  protected get casePanelEyebrow(): string {
    return this.config().casePanel?.eyebrow ?? 'Evidence File';
  }

  protected get casePanelTitle(): string {
    return this.config().casePanel?.title ?? `${this.config().title}: implementation evidence`;
  }

  protected get casePanelStatus(): string {
    return this.config().casePanel?.status ?? 'case study';
  }

  protected get sideOverviewEyebrow(): string {
    return this.config().sidebar?.overviewEyebrow ?? 'Case Overview';
  }

  protected get sideOverviewText(): string {
    const overviewText = this.config().sidebar?.overviewText;
    if (overviewText) {
      return overviewText;
    }

    const fallback = this.config().description;
    if (fallback.length <= 220) {
      return fallback;
    }

    return `${fallback.slice(0, 217).trim()}...`;
  }

  protected get impactHeading(): string {
    return this.config().sidebar?.impactHeading ?? 'Project Impact';
  }

  protected get styleVariantClass(): string {
    const styleVariant = this.config().styleVariant ?? this.resolveStyleVariant();
    return `project-detail-template--${styleVariant}`;
  }

  private resolveStyleVariant(): ProjectCaseStyle {
    const paletteByStyle: Record<string, 'compact' | 'split' | 'ledger'> = {
      green: 'split',
      teal: 'split',
      emerald: 'split',
      purple: 'compact',
      violet: 'compact',
      rose: 'compact',
      blue: 'compact',
      cyan: 'compact',
      orange: 'split',
      red: 'split',
      yellow: 'compact',
      amber: 'compact',
      indigo: 'ledger',
    };

    const byPrimary = paletteByStyle[this.config().primaryColor];
    if (byPrimary) {
      return byPrimary;
    }

    const seedSource = `${this.config().title}-${this.config().companyKey}`;
    let seed = 0;
    for (let i = 0; i < seedSource.length; i += 1) {
      seed += seedSource.charCodeAt(i);
    }

    const idx = Math.abs(seed % 3);
    if (idx === 0) {
      return 'ledger';
    }

    if (idx === 1) {
      return 'compact';
    }

    return 'split';
  }

  getListItems(items?: string[]): BulletListItem[] {
    if (!items) return [];
    return items.map((item) => ({ text: item }));
  }
}
