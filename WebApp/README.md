# WebApp

Angular 22 front end for the portfolio, built and tested with [Bun](https://bun.sh/).

## Development

```bash
bun install
bun run start:dev      # dev server on http://localhost:4200
bun run build:prod     # production build in dist/web-app
bun run build:analyze  # production build plus a bundle treemap in dist/web-app/stats.html
```

## Checks

```bash
bun run test           # Bun unit tests for helpers, data, and routes
bun run typecheck      # tsc --noEmit
bun run lint           # angular-eslint
bun run format:check   # Biome for TypeScript, Prettier for templates
bun run check          # lint, format check, and tests with coverage
```

See the [repository README](../README.md) for Docker and deployment.

## Production browser smoke checks

The Chromium suite serves the production build through the real `nginx.conf`,
not the Angular development server. Use Bun 1.3.14 and Node.js 22 or newer.

With Nix, enter `nix develop` at the repository root, then run:

```sh
cd WebApp
bun install --frozen-lockfile
bun run smoke:prod
```

The flake supplies nginx and the browsers matching the exact
`@playwright/test` 1.59.1 dependency. The runner uses the full Chromium channel
so both Nix browsers and Playwright's downloaded Chromium work. When updating
the runner, update the flake browser revision together.

Without Nix, install native nginx (on Ubuntu: `sudo apt-get install nginx`),
then run from `WebApp`:

```sh
bun install --frozen-lockfile
bun run smoke:install
bun run smoke:prod
```

`smoke:install` installs Chromium and its OS dependencies; it may require sudo.
CI can use the same commands with `CI=true`. Do not set
`PLAYWRIGHT_BROWSERS_PATH` to a Nix path on Ubuntu; let Playwright use its
normal downloaded browser cache. Docker is not required.

`bun run smoke` tests an already-built `dist/web-app/browser` directory.
`NGINX_BIN` optionally selects the native nginx executable and
`NGINX_MIME_TYPES` selects its `mime.types` file when automatic discovery
(`/etc/nginx` or the executable's sibling `conf` directory) does not apply.
`SMOKE_PORT` selects a free unprivileged port (default 4173). An existing server
on that port is not reused. The launcher changes only native filesystem/log
paths and the loopback listener in an ignored temporary configuration; it
retains production locations, caching, and security headers. It removes its
server scratch directory on shutdown. Failure traces remain under
`tmp/playwright-results` for `bunx playwright show-trace <trace.zip>`.

The `.pw.ts` suite is discovered only by Playwright, not by `bun test`.
Desktop and mobile checks cover legacy routes, case-study navigation, menu
navigation, modal focus, persisted preferences, prepared contact drafts,
layout, uncaught runtime exceptions, and HTTP caching/security headers.
