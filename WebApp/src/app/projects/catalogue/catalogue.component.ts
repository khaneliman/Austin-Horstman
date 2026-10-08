import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { catalogueQuery, companies, filterCatalogue, parseCatalogueFilters, technologies } from './catalogue';
@Component({
  selector: 'app-project-catalogue',
  imports: [RouterLink],
  templateUrl: './catalogue.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatalogueComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly query = toSignal(this.route.queryParamMap, { initialValue: this.route.snapshot.queryParamMap });
  protected readonly defaultKind =
    this.route.snapshot.data['catalogueDefault'] === 'professional'
      ? 'professional'
      : this.route.snapshot.data['catalogueDefault'] === 'personal'
        ? 'personal'
        : 'all';
  protected readonly companies = companies;
  protected readonly technologies = technologies;
  protected readonly filters = computed(() => {
    const query = new URLSearchParams();
    for (const key of ['kind', 'company', 'technology']) {
      const value = this.query().get(key);
      if (value !== null) query.set(key, value);
    }
    return parseCatalogueFilters(query, this.defaultKind);
  });
  protected readonly results = computed(() => filterCatalogue(this.filters()));
  protected readonly count = computed(() => this.results().professional.length + this.results().personal.length);
  protected update(key: 'kind' | 'company' | 'technology', event: Event): void {
    if (!(event.target instanceof HTMLSelectElement)) return;
    const query = new URLSearchParams();
    for (const [name, value] of Object.entries({ ...this.filters(), [key]: event.target.value }))
      query.set(name, value);
    void this.router.navigate([], {
      relativeTo: this.route,
      queryParams: catalogueQuery(parseCatalogueFilters(query, this.defaultKind), this.defaultKind),
      queryParamsHandling: 'merge',
    });
  }
  protected reset(): void {
    void this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { kind: null, company: null, technology: null },
      queryParamsHandling: 'merge',
    });
  }
}
