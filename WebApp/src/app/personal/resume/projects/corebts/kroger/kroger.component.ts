import { Component } from '@angular/core';
import {
  BreadcrumbComponent,
  BreadcrumbItem,
} from '../../../../../shared/components/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-kroger',
  templateUrl: './kroger.component.html',
  styleUrls: ['./kroger.component.scss'],
  standalone: true,
  imports: [BreadcrumbComponent],
})
export class KrogerComponent {
  breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Projects', route: '/projects' },
    { label: 'Professional', route: '/projects/professional' },
    { label: 'Core BTS', route: '/projects/professional/corebts' },
    { label: 'Kroger Solutions', active: true },
  ];
}
