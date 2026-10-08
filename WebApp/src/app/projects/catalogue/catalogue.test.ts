import { describe, expect, it } from 'bun:test';
import {
  catalogueQuery,
  companies,
  filterCatalogue,
  parseCatalogueFilters,
  personalCards,
  professionalCards,
  technologies,
} from './catalogue';

describe('catalogue', () => {
  it('keeps stable company identities and the supplied sequence', () => {
    expect(new Set(professionalCards.map((card) => card.id)).size).toBe(professionalCards.length);
    expect(professionalCards.slice(0, 4).map((card) => card.id)).toEqual([
      'nri-na/mulesoft-migrator',
      'nri-na/underwriting-workbench',
      'nri-na/farmlink-modernization',
      'nri-na/accident-health',
    ]);
    expect(professionalCards.filter((card) => card.title === 'Do It Best').length).toBeGreaterThan(1);
    expect(professionalCards[3]?.technologies).toEqual([]);
  });
  it('uses entry defaults and validates query values', () => {
    for (const kind of ['all', 'professional', 'personal'] as const)
      expect(parseCatalogueFilters(new URLSearchParams('kind=bad&company=bad&technology=bad'), kind)).toEqual({
        kind,
        company: '',
        technology: '',
      });
  });
  it('round trips every kind including explicit all on category entries', () => {
    for (const defaultKind of ['all', 'professional', 'personal'] as const)
      for (const kind of ['all', 'professional', 'personal'] as const) {
        const filters = { kind, company: companies[0] ?? '', technology: technologies[0] ?? '' };
        const query = new URLSearchParams();
        for (const [key, value] of Object.entries(catalogueQuery(filters, defaultKind)))
          if (value !== null) query.set(key, value);
        expect(parseCatalogueFilters(query, defaultKind)).toEqual(filters);
      }
  });
  it('intersects company and technology without dropping title contexts', () => {
    const migration = filterCatalogue({ kind: 'all', company: 'NRI-NA', technology: '.NET APIs' });
    expect(migration.professional.map((card) => card.id)).toEqual(['nri-na/mulesoft-migrator']);
    expect(migration.personal).toEqual([]);
    expect(
      filterCatalogue({ kind: 'professional', company: 'Core BTS', technology: 'Angular' }).professional.map(
        (card) => card.id
      )
    ).toEqual(['corebts/kroger']);
    expect(
      filterCatalogue({ kind: 'professional', company: '', technology: '' })
        .professional.filter((card) => card.title === 'Do It Best')
        .map((card) => card.id)
    ).toEqual(['nri-na/doitbest', 'corebts/doitbest']);
  });
  it('includes personal child technologies and preserves destinations and facts', () => {
    const result = filterCatalogue({ kind: 'personal', company: '', technology: 'REST API' });
    expect(result.personal.map((card) => card.id)).toContain('portfolio-website');
    expect(filterCatalogue({ kind: 'all', company: '', technology: '' }).personal).toEqual(personalCards);
    expect(personalCards.every((card) => card.githubUrl?.startsWith('https://github.com/'))).toBe(true);
  });
  it('supports empty results and category isolation', () => {
    expect(filterCatalogue({ kind: 'personal', company: companies[0] ?? '', technology: '' })).toEqual({
      professional: [],
      personal: [],
    });
    expect(filterCatalogue({ kind: 'professional', company: '', technology: '' }).personal).toEqual([]);
  });
});
