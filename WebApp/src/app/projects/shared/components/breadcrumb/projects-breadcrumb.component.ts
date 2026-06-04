import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroChevronRight } from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-projects-breadcrumb',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, NgIconComponent],
  providers: [provideIcons({ heroChevronRight })],
  template: `
    <div class="flex justify-center items-center space-x-2" [class]="textColor()">
      <a routerLink="/projects" class="transition-colors hover:text-teal-900 dark:hover:text-teal-100"> Projects </a>
      <ng-icon name="heroChevronRight" size="0.75rem"></ng-icon>
      <span class="font-medium">{{ currentSection() }}</span>
    </div>
  `,
})
export class ProjectsBreadcrumbComponent {
  readonly currentSection = input('');
  readonly textColor = input('text-blue-200');
}
