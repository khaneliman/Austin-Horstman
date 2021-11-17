import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-employment',
  templateUrl: './employment.component.html',
  styleUrls: ['./employment.component.css']
})
export class EmploymentComponent implements OnInit, OnDestroy {

  constructor(private router: Router, private route: ActivatedRoute) { }
  public childActivated: Promise<string> | null = null;
  private resolve: Function | null = null;
  subscriptions: Subscription[] = []

  ngOnDestroy() {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe())
  }
  
  ngOnInit(): void {
    const jobs: string[] = [];
    if (this.route && this.route.routeConfig && this.route.routeConfig.children) this.route.routeConfig.children.forEach(x => jobs.push(x.path as string));
    

    this.childActivated = new Promise<string>((resolve) => {
      this.resolve = resolve;
    });

    if (this.resolve && this.route.snapshot.firstChild) this.resolve(this.route.snapshot.firstChild.url[0].path);
  }
}
