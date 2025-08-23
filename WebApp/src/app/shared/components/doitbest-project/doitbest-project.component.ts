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
  heroCircleStack,
  heroCloud,
  heroCodeBracket,
  heroCog6Tooth,
  heroGlobeAlt,
  heroLink,
  heroListBullet,
  heroShieldCheck,
  heroShoppingBag,
  heroUserGroup,
} from '@ng-icons/heroicons/outline';
import { BaseCardComponent } from '../base-card/base-card.component';
import {
  BackgroundElement,
  DecorativeBackgroundComponent,
} from '../decorative-background/decorative-background.component';
import {
  EnhancedFeature,
  EnhancedFeatureCardComponent,
} from '../enhanced-feature-card/enhanced-feature-card.component';
import { ProjectNavHeaderComponent } from '../project-nav-header/project-nav-header.component';
import { SectionHeaderComponent } from '../section-header/section-header.component';
import { Stat, StatsGridComponent } from '../stats-grid/stats-grid.component';

@Component({
  selector: 'app-doitbest-project',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    NgIconComponent,
    ProjectNavHeaderComponent,
    BaseCardComponent,
    SectionHeaderComponent,
    StatsGridComponent,
    DecorativeBackgroundComponent,
    EnhancedFeatureCardComponent,
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
      color: 'blue-300',
      opacity: 20,
      blur: 'lg',
    },
  ];

  quickStats: Stat[] = [
    {
      icon: 'heroCodeBracket',
      value: 'C# / Java',
      label: 'Backend',
    },
    {
      icon: 'heroCircleStack',
      value: 'Kafka',
      label: 'Event Streaming',
    },
    {
      icon: 'heroCloud',
      value: 'Azure',
      label: 'Cloud',
    },
    {
      icon: 'heroArchiveBox',
      value: 'Oracle',
      label: 'Database',
    },
  ];

  technicalHighlights: EnhancedFeature[] = [
    {
      title: 'Technical Leadership',
      description:
        'Led agile process improvements and mentored junior developers while facilitating cross-functional stakeholder collaboration.',
      icon: 'heroUserGroup',
      badge: 'Leadership',
      footer: 'Team Management • Mentoring • Process Improvement',
    },
    {
      title: 'Security Architecture',
      description:
        'Designed JWT-based authentication with role-based access controls adopted across multiple C# and Java REST API applications.',
      icon: 'heroShieldCheck',
      badge: 'Security',
      footer: 'JWT • RBAC • Multi-platform',
    },
    {
      title: 'Cloud Infrastructure',
      description:
        'Architected scalable Azure infrastructure using Bicep and Kubernetes Helm charts for mission-critical workloads.',
      icon: 'heroCloud',
      badge: 'Cloud Native',
      footer: 'Azure • Kubernetes • Infrastructure as Code',
    },
    {
      title: 'Modernization Architecture',
      description:
        'Implemented event-driven architecture with Kafka stream processors for mainframe decommissioning modernization.',
      icon: 'heroCircleStack',
      badge: 'Event-Driven',
      footer: 'Kafka • Event Streaming • Legacy Migration',
    },
  ];

  keyCapabilities: EnhancedFeature[] = [
    {
      title: 'Multi-Channel Commerce',
      description:
        'Backend services supporting B2B dealer portals and B2C e-commerce with integrated inventory and pricing management.',
      icon: 'heroShoppingBag',
      badge: 'E-commerce',
      footer: 'B2B • B2C • Integration',
    },
    {
      title: 'Advanced Infrastructure',
      description:
        'Scalable cloud infrastructure with Kubernetes orchestration and automated deployment pipelines for enterprise workloads.',
      icon: 'heroArchiveBox',
      badge: 'Scalable',
      footer: 'Kubernetes • Automation • Enterprise',
    },
    {
      title: 'Event-Driven Architecture',
      description:
        'Kafka-based event streaming for real-time data processing and seamless mainframe system decommissioning.',
      icon: 'heroCircleStack',
      badge: 'Real-time',
      footer: 'Event Streaming • Real-time • Migration',
    },
    {
      title: 'Security & Authentication',
      description:
        'Enterprise-grade JWT authentication with role-based access controls across all platform services and applications.',
      icon: 'heroShieldCheck',
      badge: 'Enterprise',
      footer: 'JWT • RBAC • Platform-wide',
    },
  ];
}
