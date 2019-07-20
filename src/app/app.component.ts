import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss',
              '../assets/css/_variables.scss',
              '../assets/css/custom.sass',
              '../assets/css/bootstrap.css',
              '../assets/css/bootstrap.min.css',
            ]
})
export class AppComponent {
  title = 'austin-horstman';
}
