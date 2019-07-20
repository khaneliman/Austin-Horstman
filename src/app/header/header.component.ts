import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss',
              '../../assets/css/_variables.scss',
              '../../assets/css/custom.sass',
              '../../assets/css/bootstrap.css',
              '../../assets/css/bootstrap.min.css',
            ]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
