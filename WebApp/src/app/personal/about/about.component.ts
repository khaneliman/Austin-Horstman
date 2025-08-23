import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

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

  resumeShown = false;

  showResume(): void {
    this.resumeShown = !this.resumeShown;
  }
}
