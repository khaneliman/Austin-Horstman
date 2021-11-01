import { Component, OnInit, OnChanges } from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd} from '@angular/router';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'
            ]
})
export class HeaderComponent implements OnInit, OnChanges {

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }
  public currentRoute: string | undefined;

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map(route => {
        while (route.firstChild) {
         route = route.firstChild;
        }
        return route;
       }),
       map(route => {
         console.log(route.url);
         route.url.forEach(x => this.currentRoute = x[0].path);
       })
      )
     .subscribe(val => {
       // ... do something with the url
       console.log('The new path : ' + this.currentRoute);
     });
  }

  ngOnChanges() {
  }
}
