import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  heroArrowRight,
  heroBeaker,
  heroBriefcase,
  heroBuildingOffice,
  heroChartBarSquare,
  heroCodeBracket,
  heroRocketLaunch,
} from '@ng-icons/heroicons/outline';
import { ProfessionalProjectsGridComponent } from '../../shared/components/professional-projects-grid/professional-projects-grid.component';
import { getCompanyWithCalculatedStats } from '../../shared/data/companies';
import { generateProfessionalProjectsGrid, getResumeProjectCards } from '../../shared/data/projects';
import { ProjectsBreadcrumbComponent } from '../shared/components/breadcrumb/projects-breadcrumb.component';

@Component({
  selector: 'app-professional-projects',
  standalone: true,
  imports: [RouterModule, NgIconComponent, ProfessionalProjectsGridComponent, ProjectsBreadcrumbComponent],
  providers: [
    provideIcons({
      heroArrowRight,
      heroBriefcase,
      heroBuildingOffice,
      heroBeaker,
      heroChartBarSquare,
      heroCodeBracket,
      heroRocketLaunch,
    }),
  ],
  templateUrl: './professional.component.html',
  styleUrl: './professional.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfessionalProjectsComponent {
  protected readonly professionalProjects = generateProfessionalProjectsGrid();
  protected readonly currentCompany = getCompanyWithCalculatedStats('nri-na');
  protected readonly featuredCaseStudies = getResumeProjectCards()
    .filter((project) =>
      ['MuleSoft Migrator', 'AI Resource Staffing', 'Tax Document Analysis', 'DoItBest'].includes(project.title)
    )
    .slice(0, 4);

  protected readonly deliveryThread = [
    {
      label: 'Discovery into delivery',
      detail: 'Translate ambiguous client workflows into scoped backlogs, technical plans, and visible delivery paths.',
      marker: 'consulting entry point',
      icon: 'heroChartBarSquare',
    },
    {
      label: 'Architecture under constraints',
      detail:
        'Balance modernization goals with existing systems, team capacity, compliance needs, and release pressure.',
      marker: 'pragmatic design',
      icon: 'heroRocketLaunch',
    },
    {
      label: 'Durable handoff',
      detail: 'Leave teams with documented behavior, maintainable patterns, and systems they can continue changing.',
      marker: `${this.currentCompany.stats.years} continuous role context`,
      icon: 'heroBriefcase',
    },
  ];

  protected readonly engagementModes = [
    {
      value: 'Insurance',
      label: 'modernization',
      detail: 'Core business workflow replacement, API parity, and regression confidence.',
    },
    {
      value: 'Retail',
      label: 'enterprise systems',
      detail: 'Inventory, state management, and integration work across long-lived platforms.',
    },
    {
      value: 'Healthcare',
      label: 'data workflows',
      detail: 'Operational tooling and backend services where correctness and traceability matter.',
    },
    {
      value: 'Internal',
      label: 'team platforms',
      detail: 'Tools that reduce support load, improve coordination, and make delivery easier to repeat.',
    },
  ];
}
