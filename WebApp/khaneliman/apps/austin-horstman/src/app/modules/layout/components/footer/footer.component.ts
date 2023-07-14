import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'khaneliman-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  test: Date = new Date();

  constructor(private router: Router) {}

  getPath(): string {
    return this.router.url;
  }
}
