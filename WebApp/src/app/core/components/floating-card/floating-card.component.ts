import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgIconComponent } from '@ng-icons/core';

@Component({
  standalone: true,
  imports: [RouterModule, NgClass, NgIconComponent],
  selector: 'app-floating-card',
  templateUrl: './floating-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FloatingCardComponent {
  icon = input<string>();
  status = input<string>();
  title = input<string>();
  description = input<string>();
  superText = input<string>();
  link = input<string>();
  linkText = input<string>();
  tags = input<string[]>();

  get accentBorderClasses(): string[] {
    const defaultClasses = ['border-t-teal-500', 'dark:border-t-teal-300'];
    const accents: Record<string, string[]> = {
      primary: defaultClasses,
      success: defaultClasses,
      warning: ['border-t-amber-400', 'dark:border-t-amber-300'],
      info: ['border-t-sky-400', 'dark:border-t-sky-300'],
    };

    return accents[this.status() ?? ''] ?? defaultClasses;
  }

  get iconAccentClasses(): string[] {
    const defaultClasses = [
      'bg-teal-700',
      'ring-1',
      'ring-teal-500/20',
      'dark:bg-teal-300/15',
      'dark:text-teal-100',
      'dark:ring-teal-300/25',
    ];
    const accents: Record<string, string[]> = {
      primary: defaultClasses,
      success: defaultClasses,
      warning: [
        'bg-amber-600',
        'ring-1',
        'ring-amber-400/25',
        'dark:bg-amber-300/15',
        'dark:text-amber-100',
        'dark:ring-amber-300/25',
      ],
      info: [
        'bg-sky-700',
        'ring-1',
        'ring-sky-400/25',
        'dark:bg-sky-300/15',
        'dark:text-sky-100',
        'dark:ring-sky-300/25',
      ],
    };

    return accents[this.status() ?? ''] ?? defaultClasses;
  }
}
