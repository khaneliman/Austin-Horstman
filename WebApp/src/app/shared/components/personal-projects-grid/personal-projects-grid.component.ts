import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  heroCheckCircle,
  heroCodeBracket,
  heroCog6Tooth,
  heroComputerDesktop,
  heroDevicePhoneMobile,
  heroFolder,
  heroGlobeAlt,
  heroLightBulb,
  heroWrench,
} from '@ng-icons/heroicons/outline';
import { GridKeyboardNavDirective } from '../../directives/grid-keyboard-nav.directive';
import {
  BackgroundElement,
  DecorativeBackgroundComponent,
} from '../decorative-background/decorative-background.component';

export interface PersonalProject {
  id: string;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  featured: boolean;
  githubUrl?: string;
  liveUrl?: string;
  status: string;
  startDate: string;
  projects: {
    name: string;
    description: string;
    route: string;
    technologies: string[];
  }[];
  highlights: string[];
}

@Component({
  selector: 'app-personal-projects-grid',
  standalone: true,
  imports: [NgClass, RouterModule, NgIconComponent, DecorativeBackgroundComponent, GridKeyboardNavDirective],
  providers: [
    provideIcons({
      heroCheckCircle,
      heroCodeBracket,
      heroCog6Tooth,
      heroComputerDesktop,
      heroDevicePhoneMobile,
      heroFolder,
      heroGlobeAlt,
      heroLightBulb,
      heroWrench,
    }),
  ],
  templateUrl: './personal-projects-grid.component.html',
  styleUrls: ['./personal-projects-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonalProjectsGridComponent {
  readonly projects = input<PersonalProject[]>([]);
  readonly showFeaturedOnly = input(false);
  readonly maxProjects = input<number>();
  /** Opt-in: render a technology filter bar above the grid. */
  readonly enableFilters = input(false);

  /** How many technology chips to surface (most-common first). */
  private static readonly MAX_FILTER_TAGS = 8;

  private readonly selectedTechs = signal<ReadonlySet<string>>(new Set());

  backgroundElements: BackgroundElement[] = [
    {
      size: 'md',
      position: 'top-4 right-4',
      color: 'white',
      opacity: 10,
      blur: 'xl',
    },
  ];

  /** Projects after the static featured/max inputs, before the live category filter. */
  private get baseProjects(): PersonalProject[] {
    const filtered = this.showFeaturedOnly() ? this.projects().filter((p) => p.featured) : this.projects();
    const maxProjects = this.maxProjects();
    return maxProjects ? filtered.slice(0, maxProjects) : filtered;
  }

  get displayedProjects(): PersonalProject[] {
    const selected = this.selectedTechs();
    if (selected.size === 0) return this.baseProjects;
    return this.baseProjects.filter((project) => project.technologies.some((tech) => selected.has(tech)));
  }

  /** Most-common technologies across the base set, with counts; capped and ranked count-desc then alpha. */
  get techFilters(): { label: string; count: number }[] {
    const counts = new Map<string, number>();
    for (const project of this.baseProjects) {
      for (const tech of project.technologies) {
        counts.set(tech, (counts.get(tech) ?? 0) + 1);
      }
    }
    return [...counts.entries()]
      .map(([label, count]) => ({ label, count }))
      .sort((a, b) => b.count - a.count || a.label.localeCompare(b.label))
      .slice(0, PersonalProjectsGridComponent.MAX_FILTER_TAGS);
  }

  get totalCount(): number {
    return this.baseProjects.length;
  }

  /** Stable key of the current selection, used to replay the stagger on change. */
  get selectionKey(): string {
    return [...this.selectedTechs()].sort().join(',');
  }

  isTechSelected(tech: string): boolean {
    return this.selectedTechs().has(tech);
  }

  toggleTech(tech: string): void {
    const next = new Set(this.selectedTechs());
    if (!next.delete(tech)) next.add(tech);
    this.selectedTechs.set(next);
  }

  clearTechs(): void {
    this.selectedTechs.set(new Set());
  }

  getCategoryIcon(category: string): string {
    const categoryIcons: Record<string, string> = {
      'Open Source': 'heroCodeBracket',
      'Web Application': 'heroGlobeAlt',
      'Development Tools': 'heroWrench',
      'System Configuration': 'heroComputerDesktop',
      'Development Environment': 'heroCodeBracket',
      Automation: 'heroCog6Tooth',
      Learning: 'heroLightBulb',
      'Mobile App': 'heroDevicePhoneMobile',
    };
    return categoryIcons[category] || 'heroFolder';
  }

  getCategoryColor(category: string): string {
    const categoryColors: Record<string, string> = {
      'Open Source': 'from-green-500 to-emerald-600',
      'Web Application': 'from-blue-500 to-indigo-600',
      'Development Tools': 'from-purple-500 to-violet-600',
      'System Configuration': 'from-violet-500 to-purple-600',
      'Development Environment': 'from-emerald-500 to-teal-600',
      Automation: 'from-orange-500 to-red-600',
      Learning: 'from-yellow-500 to-amber-600',
      'Mobile App': 'from-pink-500 to-rose-600',
    };
    return categoryColors[category] || 'from-gray-500 to-slate-600';
  }

  getStatusColor(status: string): string {
    const statusColors: Record<string, string> = {
      Active: 'text-teal-800 bg-teal-50 border border-teal-200',
      Maintained: 'text-teal-800 bg-teal-50 border border-teal-200',
      Ongoing: 'text-amber-800 bg-amber-50 border border-amber-200',
      Completed: 'text-slate-700 bg-stone-100 border border-stone-200',
      Archived: 'text-rose-800 bg-rose-50 border border-rose-200',
    };
    return statusColors[status] || 'text-slate-700 bg-stone-100 border border-stone-200';
  }
}
