import { ChangeDetectionStrategy, Component, DestroyRef, inject, input, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroChevronLeft } from '@ng-icons/heroicons/outline';
import { filter } from 'rxjs/operators';
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
  private destroyRef = inject(DestroyRef);

  ngOnInit() {
    this.updateProjects(this.router.url);

    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe((event) => {
        this.updateProjects(event.urlAfterRedirects);
      });
  }

  private updateProjects(currentRoute: string): void {
    const companyKeyValue = this.companyKey();
    if (!companyKeyValue) return;

    this.projects = this.navService.getNavigationItems(companyKeyValue, currentRoute);
  }
}
