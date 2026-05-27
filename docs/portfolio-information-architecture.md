# Portfolio Information Architecture

## Problem

The portfolio currently exposes the same professional relationship through multiple destinations:

- Resume employment detail: `/personal/resume/employment/:company`
- Professional company projects: `/projects/professional/:company`
- Project case study: `/projects/professional/:company/:project`

This makes navigation ambiguous. A reviewer can choose between employment detail and company projects even though both pages describe the same role, company, and work. The result is duplicated content, unclear CTAs, and parallel pages with different UI.

## Target Model

Use one canonical graph:

```text
Resume summary -> Experience page -> Project case studies -> Technologies / outcomes
```

Canonical ownership:

| Concept | Canonical Owner | Purpose |
| --- | --- | --- |
| Resume overview | `/personal/resume` | Fast scan of education, timeline, selected work, technology summary |
| Company / role context | `/experience/:company` | Single role/company page with overview, responsibilities, timeline, related projects |
| Professional project | `/projects/professional/:company/:project` | Standalone case study with project-first hero, role/company metadata, outcomes, sibling projects |
| Professional project index | `/projects/professional` | Browse/filter projects and companies, not repeat role narrative |
| Personal project | `/projects/personal/:project` | Standalone open-source/personal case study |
| Projects landing | `/projects` | Portfolio browse surface and filters |

## Route Compatibility

Keep old routes working while moving users toward canonical destinations:

| Existing Route | Future Behavior |
| --- | --- |
| `/personal/resume/employment/:company` | Redirect or alias to `/experience/:company` |
| `/projects/professional/:company` | Redirect or alias to `/experience/:company?section=projects` |
| `/projects/professional/:company/:project` | Keep as canonical project route |
| `/personal/resume` | Keep as canonical resume summary |
| `/projects/professional` | Keep as canonical browse page |

Do not delete old route modules until route analytics, backlinks, and navigation have been migrated.

## Page Responsibilities

### Resume Summary

Keep:

- education
- current role card
- previous role cards
- selected projects preview
- technology summary

Remove or avoid:

- duplicate company/project detail CTAs that compete with employment detail
- long project grids that should live in project browse pages

Primary actions:

- View experience detail
- View selected case study
- Contact

### Experience Page

One page per company/role. It should replace the split between employment detail and company project page.

Sections:

- role summary
- company/acquisition timeline
- responsibilities and achievements
- related projects
- technologies used in that role
- previous/next role navigation

Primary actions:

- View project case study
- Back to resume

### Project Case Study

Project pages must be project-first, especially for shared links.

Above the fold:

- project title
- one-sentence outcome
- company
- role
- dates or era
- technology stack
- impact metric when available

Below:

- project overview
- key features
- implementation details
- impact
- sibling projects
- back to experience page

## Implementation Sequence

1. Create `/experience/:company` routes that reuse `CompanyProfileComponent`.
2. Point resume employment links at `/experience/:company`.
3. Add redirects or aliases from `/personal/resume/employment/:company`.
4. Move `/projects/professional/:company` to alias `/experience/:company?section=projects`.
5. Make project case studies independent of parent company profile layout.
6. Convert `/projects` and `/projects/professional` into browse/filter surfaces.
7. Remove redundant route modules only after route compatibility is covered by tests.

## Data Ownership

Current centralized data is useful and should stay:

- `shared/data/companies.ts` owns company, role, acquisition, and project references.
- `shared/data/projects.ts` owns project cards and per-company project collections.
- `shared/data/project-configurations.ts` owns case-study content.

Recommended next data cleanup:

- Add explicit `canonicalExperienceRoute` to company data.
- Keep legacy `employmentRoute` and `projectsRoute` temporarily.
- Add project metadata for `companyId`, `roleId` or role era, and outcome summary.

## Success Criteria

- A reviewer can move from resume to role detail to case study without choosing between duplicate pages.
- Every CTA has a distinct job.
- Project links are shareable and show project content first.
- Existing old URLs still resolve.
- Company/role content is written once and reused consistently.
