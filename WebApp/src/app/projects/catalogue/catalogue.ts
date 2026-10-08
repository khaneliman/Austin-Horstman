import { generatePersonalProjectsGrid } from '../../shared/data/personal-projects';
import { getResumeProjectCards, selectProjectCards } from '../../shared/data/projects';
export type CatalogueKind = 'all' | 'professional' | 'personal';
export interface CatalogueFilters {
  kind: CatalogueKind;
  company: string;
  technology: string;
}
const cards = getResumeProjectCards();
const selected = selectProjectCards(cards, [
  'nri-na/mulesoft-migrator',
  'nri-na/underwriting-workbench',
  'nri-na/farmlink-modernization',
  'nri-na/accident-health',
]);
export const professionalCards = [...selected, ...cards.filter((card) => !selected.includes(card))];
export const personalCards = generatePersonalProjectsGrid();
export const companies = [...new Set(cards.map((card) => card.company))].sort();
export const technologies = [
  ...new Set([
    ...cards.flatMap((card) => card.technologies),
    ...personalCards.flatMap((card) => [...card.technologies, ...card.projects.flatMap((child) => child.technologies)]),
  ]),
].sort();
export function parseCatalogueFilters(query: URLSearchParams, defaultKind: CatalogueKind): CatalogueFilters {
  const kind = query.get('kind');
  const company = query.get('company') ?? '';
  const technology = query.get('technology') ?? '';
  return {
    kind: kind === 'all' || kind === 'professional' || kind === 'personal' ? kind : defaultKind,
    company: companies.includes(company) ? company : '',
    technology: technologies.includes(technology) ? technology : '',
  };
}
export function catalogueQuery(filters: CatalogueFilters, defaultKind: CatalogueKind) {
  return {
    kind: filters.kind === defaultKind ? null : filters.kind,
    company: filters.company || null,
    technology: filters.technology || null,
  };
}
export function filterCatalogue(filters: CatalogueFilters) {
  return {
    professional: professionalCards.filter(
      (card) =>
        filters.kind !== 'personal' &&
        (!filters.company || card.company === filters.company) &&
        (!filters.technology || card.technologies.includes(filters.technology))
    ),
    personal: personalCards.filter(
      (card) =>
        filters.kind !== 'professional' &&
        !filters.company &&
        (!filters.technology ||
          card.technologies.includes(filters.technology) ||
          card.projects.some((child) => child.technologies.includes(filters.technology)))
    ),
  };
}
