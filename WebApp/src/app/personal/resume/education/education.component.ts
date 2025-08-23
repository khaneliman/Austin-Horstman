import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
  imports: [RouterOutlet],
})
export class EducationComponent implements OnInit, OnDestroy {
  private route = inject(ActivatedRoute);
  public childActivated: Promise<string> | null = null;
  private resolve: ((value: string) => void) | null = null;
  subscriptions: Subscription[] = [];

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  ngOnInit(): void {
    const schools: string[] = [];
    if (this.route && this.route.routeConfig && this.route.routeConfig.children)
      this.route.routeConfig.children.forEach((x) => schools.push(x.path as string));

    this.childActivated = new Promise<string>((resolve) => {
      this.resolve = resolve;
    });

    if (this.route.snapshot.firstChild && this.resolve) this.resolve(this.route.snapshot.firstChild.url[0]?.path || '');
  }
}
