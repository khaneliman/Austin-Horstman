import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroChevronRight } from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-projects-breadcrumb',
  standalone: true,
  imports: [RouterLink, NgIconComponent],
  providers: [provideIcons({ heroChevronRight })],
  template: `
    <div class="flex justify-center items-center space-x-2" [class]="textColor">
      <a routerLink="/projects" class="hover:text-white transition-colors">
        Projects
      </a>
      <ng-icon name="heroChevronRight" size="0.75rem"></ng-icon>
      <span class="text-white font-medium">{{ currentSection }}</span>
    </div>
  `,
})
export class ProjectsBreadcrumbComponent {
  @Input() currentSection = '';
  @Input() textColor = 'text-blue-200';
}
