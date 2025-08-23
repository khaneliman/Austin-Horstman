import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  heroArchiveBox,
  heroArrowRight,
  heroBeaker,
  heroBuildingOffice,
  heroCalendarDays,
  heroChartBarSquare,
  heroCircleStack,
  heroCloud,
  heroCodeBracket,
  heroCog6Tooth,
  heroGlobeAlt,
  heroLink,
  heroListBullet,
  heroShieldCheck,
  heroShoppingBag,
  heroUsers,
} from '@ng-icons/heroicons/outline';
import {
  BackgroundElement,
  DecorativeBackgroundComponent,
} from '../decorative-background/decorative-background.component';
import {
  EnhancedFeature,
  EnhancedFeatureCardComponent,
} from '../enhanced-feature-card/enhanced-feature-card.component';
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
    DecorativeBackgroundComponent,
    EnhancedFeatureCardComponent,
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

  backgroundElements: BackgroundElement[] = [
    {
      size: 'lg',
      position: 'top-4 right-4',
      color: 'white',
      opacity: 10,
      blur: 'xl',
    },
    {
      size: 'md',
      position: 'bottom-4 left-4',
      color: 'green-300',
      opacity: 20,
      blur: 'lg',
    },
  ];

  technicalHighlights: EnhancedFeature[] = [
    {
      title: 'NgRx State Management',
      description:
        'Implemented centralized state management with NgRx for multiple Angular applications, ensuring consistent data flow and application state.',
      icon: 'heroCircleStack',
      badge: 'State Management',
      footer: 'NgRx • Centralized • Data Flow',
    },
    {
      title: 'Legacy Modernization',
      description:
        'Successfully modernized Cold Fusion applications to Angular architecture while maintaining business continuity and data integrity.',
      icon: 'heroCircleStack',
      badge: 'Modernization',
      footer: 'Cold Fusion • Angular • Migration',
    },
    {
      title: 'PDF Document Management',
      description:
        'Built comprehensive PDF rendering and annotation system using Fabric.js with Azure blob storage for real-time document collaboration.',
      icon: 'heroShoppingBag',
      badge: 'Document System',
      footer: 'Fabric.js • PDF • Real-time',
    },
    {
      title: 'Azure Integration',
      description:
        'Seamless integration with Azure blob storage for secure document storage and retrieval with real-time synchronization.',
      icon: 'heroCloud',
      badge: 'Cloud Storage',
      footer: 'Azure • Storage • Synchronization',
    },
  ];

  keyCapabilities: EnhancedFeature[] = [
    {
      title: 'Real-time Inventory',
      description:
        'Live tracking of inventory levels across all store locations with automated alerts and restocking recommendations.',
      icon: 'heroChartBarSquare',
      badge: 'Real-time',
      footer: 'Inventory • Alerts • Automation',
    },
    {
      title: 'Supply Chain Integration',
      description: 'Seamless integration with supplier systems for automated ordering and delivery scheduling.',
      icon: 'heroUsers',
      badge: 'Integration',
      footer: 'Suppliers • Automation • Scheduling',
    },
    {
      title: 'Analytics Dashboard',
      description: 'Comprehensive reporting and analytics for demand forecasting and operational optimization.',
      icon: 'heroChartBarSquare',
      badge: 'Analytics',
      footer: 'Reporting • Forecasting • Optimization',
    },
    {
      title: 'Mobile Access',
      description: 'Mobile-responsive interface for store managers and warehouse personnel to access system remotely.',
      icon: 'heroShoppingBag',
      badge: 'Mobile',
      footer: 'Responsive • Remote • Management',
    },
  ];
}
