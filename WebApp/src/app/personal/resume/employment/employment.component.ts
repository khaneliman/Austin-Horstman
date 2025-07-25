import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-employment',
  templateUrl: './employment.component.html',
  styleUrls: ['./employment.component.scss'],
  imports: [RouterOutlet, AsyncPipe],
})
export class EmploymentComponent implements OnInit, OnDestroy {
  private route = inject(ActivatedRoute);
  public childActivated: Promise<string> | null = null;
  private resolve: ((value: string) => void) | null = null;
  subscriptions: Subscription[] = [];

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  ngOnInit(): void {
    const jobs: string[] = [];
    if (this.route && this.route.routeConfig && this.route.routeConfig.children)
      this.route.routeConfig.children.forEach(x => jobs.push(x.path as string));

    this.childActivated = new Promise<string>(resolve => {
      this.resolve = resolve;
    });

    if (this.resolve && this.route.snapshot.firstChild)
      this.resolve(this.route.snapshot.firstChild.url[0].path);
  }
}
