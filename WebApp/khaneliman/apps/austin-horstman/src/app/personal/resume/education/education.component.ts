import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'khaneliman-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit, OnDestroy {
  constructor(private route: ActivatedRoute) {}
  public childActivated: Promise<string> | null = null;
  private resolve: Function | null = null;
  subscriptions: Subscription[] = [];

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  ngOnInit(): void {
    const schools: string[] = [];
    if (this.route && this.route.routeConfig && this.route.routeConfig.children)
      this.route.routeConfig.children.forEach((x) =>
        schools.push(x.path as string),
      );

    this.childActivated = new Promise<string>((resolve) => {
      this.resolve = resolve;
    });

    if (this.route.snapshot.firstChild && this.resolve)
      this.resolve(this.route.snapshot.firstChild.url[0].path);
  }
}
