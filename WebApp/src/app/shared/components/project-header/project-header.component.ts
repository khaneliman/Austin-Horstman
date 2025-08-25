import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
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
import {
  BackgroundElement,
  DecorativeBackgroundComponent,
} from '../decorative-background/decorative-background.component';
import { TechTag, TechTagListComponent } from '../tech-tag-list/tech-tag-list.component';

export interface ProjectHeader {
  title: string;
  description: string;
  icon: string;
  technologies: { name: string; color: string }[];
  status?: string;
  gradientFrom: string;
  gradientTo: string;
  backgroundElements?: BackgroundElement[];
}

@Component({
  selector: 'app-project-header',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgClass, RouterLink, NgIconComponent, TechTagListComponent, DecorativeBackgroundComponent],
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
  templateUrl: './project-header.component.html',
  styleUrl: './project-header.component.scss',
})
export class ProjectHeaderComponent {
  @Input({ required: true }) project!: ProjectHeader;
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() showBackButton = false;
  @Input() backRoute?: string;
  @Input() backLabel?: string;
  @Input() variant: 'default' | 'minimal' | 'full' = 'default';

  get techTags(): TechTag[] {
    return this.project.technologies.map((tech) => ({
      name: tech.name,
      color: 'white', // White color for header tags on colored background
    }));
  }

  get containerClasses(): string {
    const baseClasses = [
      'bg-white',
      'dark:bg-gray-800',
      'rounded-3xl',
      'shadow-2xl',
      'border',
      'border-gray-100',
      'dark:border-gray-700',
      'overflow-hidden',
    ];

    if (this.variant === 'minimal') {
      baseClasses.push('shadow-lg');
    }

    return baseClasses.join(' ');
  }

  get headerClasses(): string {
    const classes = [
      'relative',
      `bg-gradient-to-r`,
      `from-${this.project.gradientFrom}`,
      `to-${this.project.gradientTo}`,
    ];

    switch (this.size) {
      case 'sm':
        classes.push('px-6', 'pt-8', 'pb-6');
        break;
      case 'md':
        classes.push('px-8', 'pt-12', 'pb-8');
        break;
      case 'lg':
        classes.push('px-10', 'pt-16', 'pb-12');
        break;
    }

    return classes.join(' ');
  }

  get iconContainerClasses(): string {
    const classes = [
      'bg-white/20',
      'rounded-2xl',
      'p-4',
      'mx-auto',
      'shadow-lg',
      'border',
      'border-white/20',
      'backdrop-blur-sm',
    ];

    switch (this.size) {
      case 'sm':
        classes.push('w-16', 'h-16', 'mb-4');
        break;
      case 'md':
        classes.push('w-24', 'h-24', 'mb-6');
        break;
      case 'lg':
        classes.push('w-32', 'h-32', 'mb-8');
        break;
    }

    return classes.join(' ');
  }

  get iconSize(): string {
    switch (this.size) {
      case 'sm':
        return '1.5rem';
      case 'md':
        return '2rem';
      case 'lg':
        return '2.5rem';
      default:
        return '2rem';
    }
  }

  get titleClasses(): string {
    const classes = ['font-bold', 'text-white', 'mb-4'];

    switch (this.size) {
      case 'sm':
        classes.push('text-xl', 'md:text-2xl');
        break;
      case 'md':
        classes.push('text-3xl', 'md:text-4xl');
        break;
      case 'lg':
        classes.push('text-4xl', 'md:text-5xl');
        break;
    }

    return classes.join(' ');
  }

  get descriptionClasses(): string {
    const classes = ['text-white/90', 'leading-relaxed', 'max-w-2xl', 'mx-auto'];

    switch (this.size) {
      case 'sm':
        classes.push('text-sm', 'md:text-base');
        break;
      case 'md':
        classes.push('text-base', 'md:text-lg');
        break;
      case 'lg':
        classes.push('text-lg', 'md:text-xl');
        break;
    }

    return classes.join(' ');
  }

  get backButtonClasses(): string {
    return [
      'inline-flex',
      'items-center',
      'gap-2',
      'text-white/80',
      'hover:text-white',
      'transition-all',
      'duration-200',
      'hover:-translate-x-1',
      'mb-6',
      'font-medium',
    ].join(' ');
  }

  get defaultBackgroundElements(): BackgroundElement[] {
    if (this.project.backgroundElements) {
      return this.project.backgroundElements;
    }

    // Default decorative elements based on gradient colors
    const primaryColor = this.project.gradientFrom.replace('-600', '').replace('-700', '');
    return [
      {
        size: 'lg',
        position: 'top-right',
        color: primaryColor,
        opacity: 10,
        blur: 'xl',
      },
      {
        size: 'md',
        position: 'bottom-left',
        color: primaryColor,
        opacity: 10,
        blur: 'lg',
      },
    ];
  }
}
