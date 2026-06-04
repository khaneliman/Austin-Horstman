import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroArrowLeft, heroArrowTopRightOnSquare } from '@ng-icons/heroicons/outline';

export interface PersonalCaseStudyMeta {
  label: string;
  value: string;
  icon: string;
}

export interface PersonalCaseStudyStat {
  label: string;
  value: string;
}

@Component({
  selector: 'app-personal-case-study-shell',
  standalone: true,
  imports: [RouterLink, NgIconComponent],
  providers: [provideIcons({ heroArrowLeft, heroArrowTopRightOnSquare })],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <main
      [class]="
        'min-h-screen bg-[var(--color-paper)] pt-16 text-slate-950 dark:bg-slate-950 dark:text-slate-50 ' + themeClass()
      "
    >
      <nav class="border-b border-stone-200 bg-white dark:border-slate-800 dark:bg-slate-900">
        <div class="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <a
            [routerLink]="backRoute()"
            class="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition dark:text-slate-300 hover:opacity-90"
          >
            <ng-icon name="heroArrowLeft" size="1rem"></ng-icon>
            {{ backLabel() }}
          </a>
          <a
            [href]="repositoryUrl()"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 rounded-lg bg-slate-950 px-4 py-2 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-teal-700 dark:bg-white dark:text-slate-950"
          >
            Repository
            <ng-icon name="heroArrowTopRightOnSquare" size="0.95rem"></ng-icon>
          </a>
        </div>
      </nav>

      <section class="border-b border-stone-200 bg-white dark:border-slate-800 dark:bg-slate-900">
        <div class="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
          <div>
            <p class="case-study-shell__eyebrow text-sm font-bold uppercase tracking-[0.2em] dark:text-slate-200">
              {{ eyebrow() }}
            </p>
            <div class="mt-5 flex flex-col items-start gap-4 sm:flex-row">
              <div
                class="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-lg bg-slate-950 text-white dark:bg-white dark:text-slate-950"
              >
                <ng-icon [name]="icon()" size="1.5rem"></ng-icon>
              </div>
              <div class="min-w-0">
                <h1
                  class="max-w-4xl break-words text-4xl font-black leading-none text-slate-950 dark:text-white sm:text-5xl lg:text-6xl"
                >
                  {{ title() }}
                </h1>
                <p class="mt-6 max-w-3xl text-lg leading-8 text-slate-700 dark:text-slate-300">
                  {{ description() }}
                </p>
              </div>
            </div>
          </div>

          <aside class="relative lg:mt-4">
            <div class="absolute -left-4 top-7 h-24 w-24 border-8 case-study-shell__frame" aria-hidden="true"></div>
            <div class="absolute -right-3 bottom-8 h-16 w-16 case-study-shell__callout" aria-hidden="true"></div>

            <div
              class="relative border border-stone-200 bg-[var(--color-paper)] p-5 shadow-xl dark:border-slate-800 dark:bg-slate-950"
            >
              <div class="flex items-start justify-between gap-4 border-b border-stone-200 pb-5 dark:border-slate-800">
                <div>
                  <p class="case-study-shell__eyebrow text-xs font-bold uppercase tracking-[0.22em]">Evidence File</p>
                  <h2 class="mt-2 text-2xl font-black text-slate-950 dark:text-white">{{ evidenceTitle() }}</h2>
                </div>
                <span
                  class="case-study-shell__status rounded-md px-3 py-1 text-xs font-black uppercase tracking-wide text-slate-950"
                >
                  active
                </span>
              </div>

              <dl class="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                @for (item of meta(); track item.label) {
                  <div class="border border-stone-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
                    <div class="flex items-center justify-between gap-3">
                      <dt
                        class="case-study-shell__meta-label text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400"
                      >
                        {{ item.label }}
                      </dt>
                      <span class="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-950 text-white">
                        <ng-icon [name]="item.icon" size="0.95rem"></ng-icon>
                      </span>
                    </div>
                    <dd class="mt-3 text-2xl font-black leading-tight text-slate-950 dark:text-white">
                      {{ item.value }}
                    </dd>
                  </div>
                }
              </dl>

              <div class="mt-5 flex flex-wrap gap-2">
                @for (tech of technologies(); track tech) {
                  <span
                    class="rounded-md bg-white px-3 py-1.5 text-xs font-bold text-slate-700 ring-1 ring-stone-200 dark:bg-slate-900 dark:text-slate-200 dark:ring-slate-800"
                  >
                    {{ tech }}
                  </span>
                }
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section class="py-12">
        <div class="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 sm:px-6 lg:grid-cols-[0.7fr_1.3fr] lg:px-8">
          <aside class="space-y-4 lg:sticky lg:top-36 lg:self-start">
            @for (stat of stats(); track stat.label) {
              <article class="case-study-shell__stat border-l-4 bg-white p-5 shadow-sm dark:bg-slate-900">
                <p class="case-study-shell__eyebrow text-xs font-bold uppercase tracking-[0.18em]">
                  {{ stat.label }}
                </p>
                <p class="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{{ stat.value }}</p>
              </article>
            }
          </aside>

          <div class="min-w-0 space-y-6">
            <ng-content></ng-content>
          </div>
        </div>
      </section>
    </main>
  `,
  styles: `
    .case-study-shell {
      --case-primary: var(--color-teal-600);
      --case-soft: color-mix(in srgb, var(--color-teal-300) 70%, transparent);
      --case-callout: var(--color-rose-400);
      --case-status: var(--color-amber-300);
      --case-stat-border: var(--color-teal-600);
    }

    .case-study-shell--teal {
      --case-primary: var(--color-teal-600);
      --case-soft: color-mix(in srgb, var(--color-teal-300) 70%, transparent);
      --case-callout: var(--color-rose-400);
      --case-status: var(--color-amber-300);
      --case-stat-border: var(--color-teal-600);
    }

    .case-study-shell--emerald {
      --case-primary: var(--color-emerald-600);
      --case-soft: color-mix(in srgb, var(--color-emerald-300) 70%, transparent);
      --case-callout: var(--color-emerald-400);
      --case-status: var(--color-cyan-300);
      --case-stat-border: var(--color-emerald-600);
    }

    .case-study-shell--blue {
      --case-primary: var(--color-blue-600);
      --case-soft: color-mix(in srgb, var(--color-blue-300) 70%, transparent);
      --case-callout: var(--color-blue-300);
      --case-status: var(--color-blue-300);
      --case-stat-border: var(--color-blue-600);
    }

    .case-study-shell--violet {
      --case-primary: var(--color-violet-600);
      --case-soft: color-mix(in srgb, var(--color-violet-300) 60%, transparent);
      --case-callout: var(--color-fuchsia-400);
      --case-status: var(--color-pink-400);
      --case-stat-border: var(--color-violet-600);
    }

    .case-study-shell--rose {
      --case-primary: var(--color-rose-600);
      --case-soft: color-mix(in srgb, var(--color-rose-300) 60%, transparent);
      --case-callout: var(--color-rose-400);
      --case-status: var(--color-amber-300);
      --case-stat-border: var(--color-rose-600);
    }

    :host-context(.dark) .case-study-shell--violet {
      --case-primary: var(--color-violet-300);
      --case-stat-border: var(--color-violet-300);
    }

    :host-context(.dark) .case-study-shell--rose {
      --case-primary: var(--color-rose-300);
      --case-stat-border: var(--color-rose-300);
    }

    .case-study-shell__eyebrow,
    .case-study-shell__meta-label {
      color: var(--case-primary);
    }

    .case-study-shell__frame {
      border-color: var(--case-soft);
    }

    .case-study-shell__callout {
      background-color: var(--case-callout);
    }

    .case-study-shell__status {
      background: var(--case-status);
    }

    .case-study-shell__stat {
      border-left-color: var(--case-stat-border);
    }
  `,
})
export class PersonalCaseStudyShellComponent {
  readonly title = input.required<string>();
  readonly eyebrow = input.required<string>();
  readonly description = input.required<string>();
  readonly icon = input.required<string>();
  readonly repositoryUrl = input.required<string>();
  readonly backRoute = input('/projects/personal');
  readonly backLabel = input('Back to Personal Projects');
  readonly evidenceTitle = input('Work that can be inspected.');
  readonly theme = input<'teal' | 'emerald' | 'blue' | 'violet' | 'rose'>('teal');
  readonly meta = input<PersonalCaseStudyMeta[]>([]);
  readonly stats = input<PersonalCaseStudyStat[]>([]);
  readonly technologies = input<string[]>([]);

  protected themeClass() {
    return `case-study-shell case-study-shell--${this.theme()}`;
  }
}
