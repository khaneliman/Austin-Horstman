import { Component } from '@angular/core';

@Component({
  selector: 'khaneliman-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  resumeShown = false;
  birthdate = new Date('08/12/1991');

  showResume(): void {
    this.resumeShown = !this.resumeShown;
  }

  calculateAge(): number {
    const timeDiff = Math.abs(Date.now() - this.birthdate.getTime());
    return Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
  }
}
