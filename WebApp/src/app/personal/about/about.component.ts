import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { getAllCompanies } from '../../shared/data/companies';
import { getPersonalProfile } from '../../shared/data/profile';
import { getAllTechnologyNames } from '../../shared/data/technologies';

@Component({
  standalone: true,
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {
  // Personal profile data
  protected readonly profile = getPersonalProfile();

  private readonly careerStartDate = signal(new Date('2013-08-01')); // When you started at Best Buy Geek Squad

  protected readonly yearsOfExperience = computed(() => {
    // Use centralized years of experience from profile
    return this.profile.yearsOfExperience;
  });

  // Calculate portfolio statistics from actual data
  protected readonly portfolioStats = computed(() => {
    const allCompanies = getAllCompanies();
    const totalProjects = allCompanies.reduce((sum, company) => {
      return sum + company.projects.length;
    }, 0);

    const totalTechnologies = getAllTechnologyNames().length;

    return {
      totalProjects,
      totalTechnologies,
    };
  });

  resumeShown = false;

  showResume(): void {
    this.resumeShown = !this.resumeShown;
  }
}
