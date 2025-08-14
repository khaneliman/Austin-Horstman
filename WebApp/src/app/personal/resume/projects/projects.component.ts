import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroRectangleStack } from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  imports: [RouterOutlet, NgIconComponent],
  providers: [
    provideIcons({
      heroRectangleStack,
    }),
  ],
})
export class ProjectsComponent implements OnInit, OnDestroy {
  public route = inject(ActivatedRoute);
  public childActivated: Promise<string> | null = null;
  private resolve: ((value: string) => void) | null = null;
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
