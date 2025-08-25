import { ChangeDetectionStrategy, Component, inject, input, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroChevronLeft } from '@ng-icons/heroicons/outline';
import { ProjectNavigationService } from '../../services/project-navigation.service';

export interface ProjectNavItem {
  name: string;
  route: string;
  isActive?: boolean;
}

@Component({
  selector: 'app-project-nav-header',
  standalone: true,
  imports: [RouterLink, NgIconComponent],
  providers: [provideIcons({ heroChevronLeft })],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './project-nav-header.component.html',
  styleUrls: ['./project-nav-header.component.scss'],
})
export class ProjectNavHeaderComponent implements OnInit {
  backRoute = input<string>('/projects/professional');
  backLabel = input<string>('Back to Professional Projects');
  hoverColor = input<string>('blue'); // blue, green, red, purple
  companyKey = input<string>('');

  projects: ProjectNavItem[] = [];

  private router = inject(Router);
  private navService = inject(ProjectNavigationService);

  ngOnInit() {
    const companyKeyValue = this.companyKey();
    if (companyKeyValue) {
      const currentRoute = this.router.url;
      this.projects = this.navService.getNavigationItems(companyKeyValue, currentRoute);
    }
  }

  navigateToProject(route: string, event: Event) {
    event.preventDefault();

    // Save current scroll position
    const currentScrollY = window.pageYOffset || document.documentElement.scrollTop;

    // Navigate to the new route
    this.router.navigate([route]).then(() => {
      // Restore scroll position after navigation
      requestAnimationFrame(() => {
        window.scrollTo(0, currentScrollY);
      });
    });
  }
}
