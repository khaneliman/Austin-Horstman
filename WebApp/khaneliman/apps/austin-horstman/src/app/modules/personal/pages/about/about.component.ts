import { Component } from '@angular/core';

@Component({
  selector: 'khaneliman-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  resumeShown = false;

  showResume(): void {
    this.resumeShown = !this.resumeShown;
  }
}
