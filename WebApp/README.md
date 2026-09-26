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
