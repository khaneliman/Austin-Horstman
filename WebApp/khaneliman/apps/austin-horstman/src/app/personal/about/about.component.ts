import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  resumeShown: boolean = false ;

  constructor() { }

  showResume() {
    this.resumeShown = !this.resumeShown;
  }

}
