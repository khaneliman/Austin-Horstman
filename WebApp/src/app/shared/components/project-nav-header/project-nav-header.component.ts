import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { ProjectNavigationService } from '../../services/project-navigation.service';

export interface ProjectNavItem {
  name: string;
  route: string;
  isActive?: boolean;
}

@Component({
  selector: 'app-project-nav-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
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
}
