import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
  imports: [RouterOutlet, AsyncPipe],
})
export class EducationComponent implements OnInit, OnDestroy {
  private route = inject(ActivatedRoute);
  public childActivated: Promise<string> | null = null;
  private resolve: ((value: string) => void) | null = null;
  subscriptions: Subscription[] = [];

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  ngOnInit(): void {
    const schools: string[] = [];
    if (this.route && this.route.routeConfig && this.route.routeConfig.children)
      this.route.routeConfig.children.forEach(x =>
        schools.push(x.path as string)
      );

    this.childActivated = new Promise<string>(resolve => {
      this.resolve = resolve;
    });

    if (this.route.snapshot.firstChild && this.resolve)
      this.resolve(this.route.snapshot.firstChild.url[0].path);
  }
}
