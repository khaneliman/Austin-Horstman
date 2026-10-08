import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  computed,
  DestroyRef,
  ElementRef,
  inject,
  input,
  viewChild,
} from '@angular/core';
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

  private readonly destroyRef = inject(DestroyRef);
  private readonly progressBar = viewChild.required<ElementRef<HTMLElement>>('progressBar');

  constructor() {
    // The reading-progress bar follows every scroll frame. Writing its transform
    // directly from a passive listener keeps scrolling from re-running change
    // detection over the whole case study.
    afterNextRender(() => {
      let frame = 0;
      const update = () => {
        frame = 0;
        const doc = document.documentElement;
        const total = doc.scrollHeight - doc.clientHeight;
        const ratio = total > 0 ? Math.min(1, Math.max(0, window.scrollY / total)) : 0;
        this.progressBar().nativeElement.style.transform = `scaleX(${ratio})`;
      };
      const schedule = () => {
        frame ||= requestAnimationFrame(update);
      };
      window.addEventListener('scroll', schedule, { passive: true });
      window.addEventListener('resize', schedule, { passive: true });
      update();
      this.destroyRef.onDestroy(() => {
        window.removeEventListener('scroll', schedule);
        window.removeEventListener('resize', schedule);
        cancelAnimationFrame(frame);
      });
    });
  }

  protected readonly estimatedMinutes = computed(() => {
    const cfg = this.config();
    const chunks: string[] = [cfg.title, cfg.description, cfg.outcome ?? '', cfg.impact ?? '', cfg.overview.content];
    for (const item of cfg.overview.items ?? []) chunks.push(item);
    for (const section of cfg.technicalDetails ?? []) {
      chunks.push(section.title, section.content);
      for (const item of section.items ?? []) chunks.push(item);
    }
    for (const section of cfg.specialSections ?? []) {
      chunks.push(section.title, section.content);
      for (const item of section.items ?? []) chunks.push(item);
    }
    for (const stat of cfg.quickStats ?? []) chunks.push(stat.label, stat.value);
    for (const feature of cfg.features) chunks.push(feature.title, feature.description);

    const words = chunks
      .join(' ')
      .replace(/<[^>]+>/g, ' ')
      .split(/\s+/)
      .filter(Boolean).length;
    return Math.max(1, Math.round(words / 220));
  });

  protected readonly techTags = computed<TechTag[]>(() =>
    this.config().technologies.map((tech) => ({
      name: tech.name,
      color: tech.color || this.config().primaryColor,
    }))
  );

  protected readonly features = computed<Feature[]>(() =>
    this.config().features.map((feature) => ({
      icon: feature.icon,
      title: feature.title,
      description: feature.description,
    }))
  );

  protected get themeClass() {
    const families: Record<string, string> = {
      amber: 'orange',
      blue: 'blue',
      green: 'green',
      orange: 'orange',
      purple: 'purple',
      rose: 'rose',
      red: 'rose',
      yellow: 'amber',
      teal: 'teal',
      emerald: 'emerald',
      indigo: 'blue',
      violet: 'purple',
    };

    return `palette-${families[this.config().primaryColor] ?? 'blue'}`;
  }

  protected get mainClass() {
    return [
      'project-detail-template',
      'min-h-screen',
      'bg-[var(--color-paper)]',
      'text-slate-950',
      'dark:bg-slate-950',
      'dark:text-slate-50',
      this.styleVariantClass,
      this.themeClass,
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

  protected get resolvedVariant(): ProjectCaseStyle {
    return this.config().styleVariant ?? 'split';
  }

  protected get styleVariantClass(): string {
    return `project-detail-template--${this.resolvedVariant}`;
  }

  protected formatLedgerIndex(i: number): string {
    return String(i + 1).padStart(2, '0');
  }

  getListItems(items?: string[]): BulletListItem[] {
    if (!items) return [];
    return items.map((item) => ({ text: item }));
  }
}
