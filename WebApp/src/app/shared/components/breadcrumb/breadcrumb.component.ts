import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroGlobeAlt } from '@ng-icons/heroicons/outline';

export interface BreadcrumbItem {
  label: string;
  route?: string;
  active?: boolean;
}

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [CommonModule, RouterModule, NgIconComponent],
  providers: [provideIcons({ heroGlobeAlt })],
  template: `
    <nav class="flex mb-8" aria-label="Breadcrumb">
      <ol
        class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse"
      >
        <li
          *ngFor="let item of items; let last = last; let i = index"
          class="inline-flex items-center"
        >
          <ng-container *ngIf="i > 0">
            <svg
              class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
          </ng-container>

          <ng-container *ngIf="item.route && !last">
            <a
              [routerLink]="item.route"
              class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              <ng-icon
                *ngIf="i === 0"
                name="heroGlobeAlt"
                size="0.75rem"
                class="mr-2.5"
              ></ng-icon>
              {{ item.label }}
            </a>
          </ng-container>

          <ng-container *ngIf="!item.route || last">
            <span
              class="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400"
              [class.text-blue-600]="last"
              [class.font-semibold]="last"
            >
              <ng-icon
                *ngIf="i === 0"
                name="heroGlobeAlt"
                size="0.75rem"
                class="mr-2.5"
              ></ng-icon>
              {{ item.label }}
            </span>
          </ng-container>
        </li>
      </ol>
    </nav>
  `,
})
export class BreadcrumbComponent {
  @Input() items: BreadcrumbItem[] = [];
}
