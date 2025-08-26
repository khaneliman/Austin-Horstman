import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { getAllCompanies } from '../../shared/data/companies';
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
  private readonly careerStartDate = signal(new Date('2013-08-01')); // When you started at Best Buy Geek Squad

  protected readonly yearsOfExperience = computed(() => {
    const today = new Date();
    const careerStart = this.careerStartDate();
    let years = today.getFullYear() - careerStart.getFullYear();
    const monthDiff = today.getMonth() - careerStart.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < careerStart.getDate())) {
      years--;
    }

    return years;
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
