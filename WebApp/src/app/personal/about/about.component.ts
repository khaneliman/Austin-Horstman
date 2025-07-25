import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  imports: [RouterLink],
})
export class AboutComponent {
  resumeShown = false;

  showResume(): void {
    this.resumeShown = !this.resumeShown;
  }
}
