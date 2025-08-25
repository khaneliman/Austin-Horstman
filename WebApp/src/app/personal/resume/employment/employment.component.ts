import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';
import { WaveSeparatorComponent } from '../../../shared/components/wave-separator/wave-separator.component';

@Component({
  selector: 'app-employment',
  standalone: true,
  templateUrl: './employment.component.html',
  styleUrls: ['./employment.component.scss'],
  imports: [RouterOutlet, AsyncPipe, WaveSeparatorComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmploymentComponent implements OnInit, OnDestroy {
  private route = inject(ActivatedRoute);
  public childActivated: Promise<string> | null = null;
  private resolve: ((value: string) => void) | null = null;
  subscriptions: Subscription[] = [];

  ngOnDestroy() {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  ngOnInit(): void {
    const jobs: string[] = [];
    if (this.route && this.route.routeConfig && this.route.routeConfig.children)
      this.route.routeConfig.children.forEach((x) => jobs.push(x.path as string));

    this.childActivated = new Promise<string>((resolve) => {
      this.resolve = resolve;
    });

    if (this.resolve && this.route.snapshot.firstChild) this.resolve(this.route.snapshot.firstChild.url[0]?.path || '');
  }
}
