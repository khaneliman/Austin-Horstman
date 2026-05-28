import { Injectable, signal } from '@angular/core';
import { COMPANIES } from '../data/companies';
import { generatePersonalProjectsGrid } from '../data/personal-projects';

export type CommandKind = 'page' | 'company' | 'project' | 'personal' | 'tech' | 'action';

// Side-effecting commands handled by the palette component, which owns the
// router, theme service, and clipboard. Navigational entries leave this unset.
export type CommandAction = 'toggle-theme' | 'copy-link';

export interface CommandEntry {
  id: string;
  kind: CommandKind;
  label: string;
  hint: string;
  route?: string;
  external?: string;
  keywords?: string;
  action?: CommandAction;
}

@Injectable({ providedIn: 'root' })
export class CommandPaletteService {
  readonly isOpen = signal(false);

  open(): void {
    this.isOpen.set(true);
  }

  close(): void {
    this.isOpen.set(false);
  }

  toggle(): void {
    this.isOpen.update((open) => !open);
  }

  buildIndex(): CommandEntry[] {
    const entries: CommandEntry[] = [
      { id: 'page:home', kind: 'page', label: 'Home', hint: 'Landing page', route: '/home' },
      { id: 'page:about', kind: 'page', label: 'About', hint: 'Personal background', route: '/personal/about' },
      { id: 'page:contact', kind: 'page', label: 'Contact', hint: 'Get in touch', route: '/personal/contact' },
      { id: 'page:resume', kind: 'page', label: 'Resume', hint: 'Career timeline + skills', route: '/personal/resume' },
      { id: 'page:projects', kind: 'page', label: 'All Projects', hint: 'Projects overview', route: '/projects' },
      {
        id: 'page:professional',
        kind: 'page',
        label: 'Professional Projects',
        hint: 'Client work by company',
        route: '/projects/professional',
      },
      {
        id: 'page:personal-projects',
        kind: 'page',
        label: 'Personal Projects',
        hint: 'Open-source + side work',
        route: '/projects/personal',
      },
      { id: 'page:now', kind: 'page', label: 'Now', hint: 'What I am working on', route: '/now' },
    ];

    for (const company of Object.values(COMPANIES)) {
      entries.push({
        id: `company:${company.id}`,
        kind: 'company',
        label: company.displayName,
        hint: `${company.position} · ${company.location}`,
        route: company.experienceRoute,
        keywords: `${company.name} ${company.department ?? ''}`,
      });

      for (const project of company.projects) {
        entries.push({
          id: `project:${company.id}:${project.route}`,
          kind: 'project',
          label: project.name,
          hint: `${company.displayName} case study`,
          route: `${company.projectsRoute}/${project.route}`,
        });
      }
    }

    for (const personal of generatePersonalProjectsGrid()) {
      entries.push({
        id: `personal:${personal.id}`,
        kind: 'personal',
        label: personal.title,
        hint: personal.category,
        route: `/projects/personal`,
        external: personal.githubUrl,
        keywords: personal.technologies.join(' '),
      });
    }

    return entries;
  }
}
