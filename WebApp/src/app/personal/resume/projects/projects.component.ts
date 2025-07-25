import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  imports: [RouterOutlet, AsyncPipe],
})
export class ProjectsComponent implements OnInit, OnDestroy {
  constructor(private route: ActivatedRoute) {}
  public childActivated: Promise<string> | null = null;
  private resolve: Function | null = null;
  subscriptions: Subscription[] = [];

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  ngOnInit(): void {
    const projects: string[] = [];
    if (this.route && this.route.routeConfig && this.route.routeConfig.children)
      this.route.routeConfig.children.forEach(x =>
        projects.push(x.path as string)
      );

    this.childActivated = new Promise<string>(resolve => {
      this.resolve = resolve;
    });

    if (this.resolve && this.route.snapshot.firstChild)
      this.resolve(this.route.snapshot.firstChild.url[0].path);
  }
}
