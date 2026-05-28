import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  computed,
  DestroyRef,
  ElementRef,
  inject,
  input,
  OnDestroy,
  PLATFORM_ID,
  viewChildren,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { CompanyInfo } from '../../data/companies';
import { calculateYearsBetweenDates, formatDateRange } from '../../utils/date.utils';

interface TimelineEntry {
  id: string;
  yearStart: string;
  yearEnd: string;
  range: string;
  years: string;
  company: CompanyInfo;
  isCurrent: boolean;
}

/**
 * Effective start of this person's tenure AT THIS SPECIFIC COMPANY.
 *
 * The company data models `dateStart` as the *continuous-tenure* start across
 * acquisitions (e.g. skyline/corebts/nri-na all share 2017-10 because the
 * person's tenure has been continuous through both acquisitions). For a
 * timeline, we need the moment THIS company became the employer.
 *
 * Resolution rules:
 * - If acquisitionChain contains a self-entry (companyId matches), use its
 *   dateStart. This handles the current employer case (nri-na lists itself).
 * - Otherwise, the tenure begins when the latest predecessor's tenure ended.
 * - If no chain, fall back to dateStart.
 */
function effectiveStartDate(company: CompanyInfo): string {
  const chain = company.acquisitionChain;
  if (!chain || chain.length === 0) return company.dateStart;

  const selfEntry = chain.find((entry) => entry.companyId === company.id);
  if (selfEntry) return selfEntry.dateStart;

  const predecessorEnds = chain.map((entry) => entry.dateEnd).filter((d): d is string => Boolean(d));
  if (predecessorEnds.length === 0) return company.dateStart;
  return predecessorEnds.reduce((latest, current) => (current > latest ? current : latest));
}

@Component({
  selector: 'app-career-timeline',
  standalone: true,
  templateUrl: './career-timeline.component.html',
  styleUrl: './career-timeline.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
})
export class CareerTimelineComponent implements AfterViewInit, OnDestroy {
  readonly companies = input.required<readonly CompanyInfo[]>();

  private readonly platformId = inject(PLATFORM_ID);
  private readonly isBrowser = isPlatformBrowser(this.platformId);
  private readonly destroyRef = inject(DestroyRef);
  private readonly entryElements = viewChildren<ElementRef<HTMLElement>>('entry');
  private observer?: IntersectionObserver;

  readonly entries = computed<TimelineEntry[]>(() => {
    const withEffective = this.companies().map((company) => ({
      company,
      start: effectiveStartDate(company),
    }));
    withEffective.sort((a, b) => a.start.localeCompare(b.start));

    return withEffective.map(({ company, start }) => ({
      id: company.id,
      yearStart: start.slice(0, 4),
      yearEnd: company.dateEnd?.slice(0, 4) ?? 'Now',
      range: formatDateRange(start, company.dateEnd),
      years: calculateYearsBetweenDates(start, company.dateEnd),
      company,
      isCurrent: !company.dateEnd,
    }));
  });

  ngAfterViewInit(): void {
    if (!this.isBrowser) return;
    this.observer = new IntersectionObserver(
      (records) => {
        for (const record of records) {
          if (record.isIntersecting) {
            record.target.classList.add('is-visible');
            this.observer?.unobserve(record.target);
          }
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -10% 0px' }
    );

    for (const ref of this.entryElements()) {
      this.observer.observe(ref.nativeElement);
    }

    this.destroyRef.onDestroy(() => this.observer?.disconnect());

    // Re-observe if entries change later (signal-driven).
    takeUntilDestroyed(this.destroyRef);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
