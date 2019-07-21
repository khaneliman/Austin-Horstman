import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'
            ]
})
export class AppComponent {
  title = 'austin-horstman';

  constructor(private renderer: Renderer2) {
    this.renderer.addClass(document.body, 'landing');
   }

  ngOnDestroy() {
    this.renderer.removeClass(document.body, 'landing');
  }
}
