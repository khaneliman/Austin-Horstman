# Codebase improvement plan

Fix the two reproduced correctness problems first, make the checks reproducible, then improve how visitors find and share the work. Keep Angular, Bun, the static Nginx deployment, and the current visual system. A whole-site redesign is a separate decision.

This plan starts from `b18c6dd2`. It defines future implementation; no application changes have been made as part of planning.

## Outcomes and constraints

- Date-only values keep their calendar day in every visitor time zone.
- Invalid GitHub responses cannot replace valid contribution counts.
- A fresh checkout can run the same quality and browser checks as CI.
- Featured work preserves the supplied project sequence and has stable identity. Project browsing has one implementation, while existing URLs keep working.
- Case-study links have the correct title, description, canonical URL, and sharing metadata. Static HTML previews are conditional on a successful prerender trial.
- Contact drafts can be copied without adding a message-sending backend.

Preserve project facts, route compatibility, keyboard accessibility, upstream palette intent, and the existing container hardening. Do not change the metrics publication cadence, upgrade frameworks, delete the API, or select a new layout as incidental cleanup.

The preceding assessment passed 187 Bun tests, lint, formatting, typecheck, and a production build. The initial bundle was 600.14 kB against a 650 kB warning budget. At 390 px, Resume measured 14,428 px tall and Projects 12,833 px. These are baselines, not reasons to add arbitrary line-count, coverage, or page-height targets.

## Execution order

Small means a bounded existing path, medium means coordinated tooling or data changes, and larger means a structural change. These are scope estimates, not promised durations. Each numbered slice below is independently reviewable; split its setup, enablement, or documentation further whenever those can stand alone.

### Phase one Correctness and the existing quality gate

These changes need no new product decisions. The date and metrics fixes can be developed independently.

**1. Fix calendar-date display. Small.** Add one date-only formatter to [date.utils.ts](../WebApp/src/app/shared/utils/date.utils.ts). Preserve the current long and short display formats. Replace the UTC-midnight/local-format expressions in [Now](../WebApp/src/app/now/now.component.ts) and [Resume](../WebApp/src/app/personal/resume/resume.component.ts). Inspect the existing local-date formatters in the personal project pages before deciding whether to consolidate them. Do not change month-based employment ranges or elapsed-career calculations.

Define the accepted ISO date shape and invalid-input behavior explicitly. Check August 24, a month boundary, and a leap day in UTC, Chicago, Los Angeles, and Tokyo. The displayed date must be identical across zones. A narrow unit check belongs with the fix; existing date-range checks must still pass.

Commit boundary: `fix(dates): preserve calendar dates across time zones`.

**2. Validate contribution metrics before writing. Small.** Keep [update-github-metrics.mjs](../.github/scripts/update-github-metrics.mjs) as the owner of fetching and generation. Require complete responses and nonnegative safe-integer counts. Validate every represented repository before generating output. A rejected response must leave the existing file byte-for-byte unchanged and cause a failing command exit.

Use Node's built-in test runner. Copy the command and a seeded metrics file into a scratch repository tree, then stub network responses through a preload module when running that copy. The script derives its output path from its own location and runs immediately, so never import or execute the production copy in a test that can write. Cover a missing count, negative/fractional/unsafe counts, incomplete results, HTTP failure, unchanged counts, legitimate zero, and valid increases. Preserve the current update-on-increase rule; do not clamp counts, silently substitute zero, or add retries without evidence they are needed. Test scratch belongs in an ignored build location or the user cache.

Commit boundary: `fix(metrics): reject invalid contribution responses`.

**3. Gate metrics changes in CI. Small.** Add a focused check for the script and its tests. Trigger it for changes to those files and the check's own workflow, not only for the weekly refresh. Keep this check free of GitHub credentials and network calls. Do not turn the scheduled publication job into a PR test runner.

Local completion requires a malformed-response regression to fail the test command, verification of workflow triggers, and proof that the fixture never touches the real metrics file. Confirm the PR check itself after a separately authorized push. Workflow enablement can be reverted without removing the validation fix.

Commit boundary: `ci(metrics): run generation regression checks`.

**4. Align the frontend CI gate. Small.** Update [package.json](../WebApp/package.json) and [Angular WebApp Build](../.github/workflows/angular-webapp.yml) so a frozen install runs `check`, `typecheck`, and the production build without running the Bun suite twice. Keep standalone typecheck: [tsconfig.app.json](../WebApp/tsconfig.app.json) builds the application, whereas the broader TypeScript check also includes test sources. Include changes to the workflow itself in its path triggers.

Local completion requires a fresh checkout to run every selected command and a deliberate test-only type error or formatting violation to fail the appropriate check. Check the workflow structure locally, then confirm the same commands run on GitHub after a separately authorized push. Keep the successful-workflow dependency used by the Docker publisher.

Commit boundary: `ci(webapp): run the complete frontend quality gate`.

### Phase two Browser checks and shareable pages

**5. Make the browser toolchain reproducible. Medium.** Reuse the Playwright runner and browser support already exposed by [flake.nix](../flake.nix). Establish a compatible pinned runner for non-Nix CI using the existing Bun lockfile if a package dependency is needed. Check runner/browser revision compatibility before choosing the installation path. Keep dependency and lockfile setup separate from suite implementation when both commits can run independently.

**6. Commit a focused production smoke suite. Medium.** Port useful route and interaction checks into the repository without private cache paths, store hashes, or fixed sleeps. Cover education and legacy experience redirects, direct case-study loads and sibling navigation, mobile navigation, command-palette focus containment and restoration, theme persistence, the single-key shortcut switch, and contact preparation. Use semantic locators and observable-state assertions. Start with Chromium at desktop and mobile widths; do not add a broad browser matrix without a concrete compatibility need.

Serve the built output through the real [nginx.conf](../WebApp/nginx.conf), preferably with the WebApp image. Check runtime errors, horizontal overflow, app-shell revalidation, and retained security headers. First prove that an intentionally broken redirect or interaction makes the suite fail.

**7. Enable the smoke suite in CI. Small.** Add the smoke job to the existing Angular WebApp Build workflow so a failed smoke check makes that workflow fail. Build and test the same source revision. Check the job dependencies locally and prove that a controlled broken interaction fails the smoke command. After a separately authorized push, confirm the job runs and the automatic `workflow_run` publisher requires the successful result of the whole workflow.

The Docker publisher also has release and manual triggers; these remain separate existing entry points, not covered by this automatic gate. Changing their policy would be a distinct decision. Document the local command in [WebApp README](../WebApp/README.md), including browser installation and container prerequisites. No publication or live deployment is part of local implementation verification.

Commit boundaries for 5 through 7: browser dependency setup if needed, a runnable suite, CI enablement, then contributor documentation when it can stand alone.

**8. Add route-specific metadata. Medium.** Use route definitions and the existing case-study configuration as the source for titles, descriptions, canonical URLs, and Open Graph/Twitter fields. Extend [caseStudyRoute](../WebApp/src/app/projects/professional/case-study.ts) rather than copy metadata into every project component. Resolve metadata centrally on navigation, including clearing stale project fields when returning to Home. Avoid eagerly importing every case-study configuration into the app shell.

Choose an explicit preview-image source; do not fabricate project screenshots or delivery facts. Verify direct loads and navigation among FarmLink, another case study, and Home. Each rendered page must have the right metadata and no leftover tags. Browser-side metadata alone does not satisfy static sharing previews.

Commit boundary: `feat(metadata): describe each portfolio route`.

**9. Trial build-time prerendering. Bounded research, then conditional implementation.** Run this trial early in parallel with independent correctness work so an architectural blocker is discovered before depending on it. Inspect the installed Angular builder, enumerate lazy routes, and attempt a small static build containing Home, FarmLink, and one legacy redirect. Check browser-only behavior in themes, keyboard services, dialogs, scrolling, and the project template. Keep the trial isolated from the integration checkout.

Pass only when the direct HTTP response contains the correct project content and head metadata, the existing pre-paint theme behavior remains correct, and any client bootstrap or hydration emits no errors. Serve the output with the production Nginx configuration. If static output is practical, extend route coverage and verify redirects, assets, caching, and container size before enabling it. Check revalidation for every prerendered HTML document, not only root `index.html`, and settle directory/trailing-slash redirects. Otherwise keep slice 8 and record the specific blocker. Do not replace static hosting with a running SSR service to force a pass.

Keep successful setup, enabling static output, and any required deployment changes independently reversible where possible. A failed trial produces evidence, not a production commit.

### Phase three Visitor workflows and content ownership

**10. Make Home selection explicit. Small to medium.** Add stable card identity and an ordered selection helper to [projects.ts](../WebApp/src/app/shared/data/projects.ts). Use company plus project-route identity where a project appears under multiple companies. Adopt the helper on Home now; let the catalogue and shortened Resume consume these IDs in slice 12 rather than reworking pages that will then be replaced.

Preserve the supplied project sequence: MuleSoft Migrator, Underwriting Workbench, FarmLink Modernization, then Accident & Health (new). Do not replace that sequence with an editorial ranking. Mark Accident & Health as new and use supplied facts for its content; do not invent dates, outcomes, or technical details.

Separate the reusable data change from Home adoption when both commits can stand alone. Tests must detect missing IDs and unintended duplicates, and renaming a title must not change selection.

**11. Finish the small visitor actions. Small, separate changes.** Turn the four Home gateway panels into real destination links. Add a Copy button to prepared contact drafts, with reactive success/failure feedback, clipboard-denial coverage, and manual selection as a fallback. Keep both changes keyboard-accessible. Copy must reproduce the exact draft and must not send a message. These are independent commits, not one general UI-polish commit.

**12. Finish the documented page responsibilities. Larger.** Follow [Portfolio Information Architecture](portfolio-information-architecture.md): Home introduces selected evidence, Resume summarizes the career, Experience owns company/role context, and project pages own case studies.

Build one catalogue implementation with company, technology, and professional/personal filters. Preserve `/projects`, `/projects/professional`, and `/projects/personal` as working entry points with appropriate default views. Keep filter state in the URL so refresh, sharing, and Back restore it. Filtered views use their stable entry route, without filter query parameters, as the canonical URL. Update metadata and smoke checks when these routes adopt the catalogue. Preserve project route identity and useful company context instead of deduplicating by title.

Then shorten Resume's repeated project and technology presentations while retaining education and career facts and linking to their detailed destinations. Use stable IDs for its selected work instead of title deduplication or source-order selection. Do not simply move long sections behind inaccessible controls or remove facts to meet a height target. Verify that a visitor can reach a project by company or technology without scanning competing narratives. Recheck desktop/mobile layouts, print output, keyboard navigation, and all legacy routes affected by the change.

Split catalogue data/behavior, individual route adoption, and Resume simplification into independently working commits. This is an information-architecture change in the current visual system, not a choice among the unselected whole-site layouts.

### Phase four Deployment decisions and optional polish

**13. Decide the API's purpose before changing deployment.** The repository frontend has no caller for the sample WeatherForecast endpoint. External consumers and the reason for retaining WebApi remain unverified. The default recommendation is an optional Compose profile for the demo, not deletion. If it is product functionality, define its first real use and add endpoint tests instead.

Once the purpose is settled, update both production Compose files together and retain their documented equivalence. Preserve loopback binding, internal networking, image users, and read-only restrictions. Check default and opt-in service lists and start the intended configuration. If the API stays, its CI must report actual executed tests rather than a successful `dotnet test` step with no test project. Update [homelab deployment guidance](homelab-deployment.md) with the chosen behavior. Live Unraid changes remain a separate action.

**Later, only if justified:** distinguish unhashed-image cache lifetimes from hashed bundles; address eager icon costs if measurements justify it; revisit palette contrast only with an explicit upstream-fidelity/accessibility decision. Keep these out of correctness and catalogue commits.

## Dependencies and parallel work

The phase headings group related work, not a requirement to finish every phase before starting another:

- Slices 1 and 2 are independent. Slice 3 follows 2; slice 4 is independent of both.
- Browser setup 5 precedes suite 6; CI enablement 7 needs 4 and 6.
- Metadata 8 does not depend on production prerendering. Start the trial in 9 when an isolated writer slot opens; enabling its output requires 8 and the browser checks in 6.
- Home data and selection in 10 and the separate visitor actions in 11 can proceed after CI parity in 4, without waiting for prerendering.
- Catalogue and Resume work in 12 use the stable identities in 10 and browser coverage in 6. Keep metadata checks current as routes change.
- API work in 13 depends on the purpose/external-consumer decision, not on the frontend sequence.

Use one integration owner and at most two simultaneous writers. Give each writer one bounded path set, acceptance condition, and isolated worktree. Record ownership, base revision, and integration target before allocation. The date and metrics paths are independent; browser setup and the prerender trial are independent of both.

Serialize changes to `package.json`, `bun.lock`, `angular.json`, app routing, and shared project data. Do not let independent writers resolve overlapping ownership by overwriting each other's work. Integrate each verified slice, inspect its exact diff, and commit it before assigning dependent work. One read-only reviewer checks a routine candidate; corrections remain separate from review. Change worker capability or effort only for an evidenced failure or a risk the default cannot cover.

Revert a leaf change independently. For a foundational change, revert its dependent consumers first. Keep failed trials out of the integration branch. No push, PR publication, deployment, or activation follows merely from finishing local commits.

## Completion checks

After each slice, run its focused checks plus the existing checks affected by its paths. After integration, use a clean checkout and frozen dependency install for the full frontend gate, metrics command tests, and the production browser suite. Confirm the initial bundle remains within the existing budget; investigate regressions before raising limits.

Use a higher level of verification for generated counts, route compatibility, static rendering, and deployment configuration because those affect trust, shared links, or multiple pages. Do not rerun unrelated checks for a documentation-only change.

Local completion means the selected outcomes above pass on the integrated revision, the exact verified commits are recorded, and all task-owned workers and integrated worktrees are stopped and removed. GitHub workflow execution and automatic publication gating remain follow-up verification after an authorized push; do not claim them from local command results. Retain an unintegrated resource only with its exact path/ref, reason, and next action. Record whether prerendering passed and the chosen API purpose; unresolved decisions do not block the independent correctness fixes.
