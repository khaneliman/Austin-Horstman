import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { ProjectNavigationService } from '../../services/project-navigation.service';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroChevronLeft } from '@ng-icons/heroicons/outline';

export interface ProjectNavItem {
  name: string;
  route: string;
  isActive?: boolean;
}

@Component({
  selector: 'app-project-nav-header',
  standalone: true,
  imports: [CommonModule, RouterLink, NgIconComponent],
  providers: [provideIcons({ heroChevronLeft })],
  templateUrl: './project-nav-header.component.html',
  styleUrls: ['./project-nav-header.component.scss'],
})
export class ProjectNavHeaderComponent implements OnInit {
  @Input() backRoute = '/projects/professional';
  @Input() backLabel = 'Back to Professional Projects';
  @Input() hoverColor = 'blue'; // blue, green, red, purple
  @Input() companyKey = '';

  projects: ProjectNavItem[] = [];

  private router = inject(Router);
  private navService = inject(ProjectNavigationService);

  ngOnInit() {
    if (this.companyKey) {
      const currentRoute = this.router.url;
      this.projects = this.navService.getNavigationItems(
        this.companyKey,
        currentRoute
      );
    }
  }

  navigateToProject(route: string, event: Event) {
    event.preventDefault();

    // Save current scroll position
    const currentScrollY =
      window.pageYOffset || document.documentElement.scrollTop;

    // Navigate to the new route
    this.router.navigate([route]).then(() => {
      // Restore scroll position after navigation
      requestAnimationFrame(() => {
        window.scrollTo(0, currentScrollY);
      });
    });
  }
}
