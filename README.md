# Austin Horstman Dotnet Angular App

![Badge for GitHub repo top language](https://img.shields.io/github/languages/top/khaneliman/austin-horstman?style=flat&logo=appveyor)
![Badge for GitHub last commit](https://img.shields.io/github/last-commit/khaneliman/austin-horstman?style=flat&logo=appveyor)

[![Docker WebApp - Develop](https://github.com/khaneliman/austin-horstman/actions/workflows/docker-webapp.yml/badge.svg)](https://github.com/khaneliman/austin-horstman/actions/workflows/docker-webapp.yml)
[![Docker WebApi - Develop](https://github.com/khaneliman/austin-horstman/actions/workflows/docker-webapi.yml/badge.svg)](https://github.com/khaneliman/austin-horstman/actions/workflows/docker-webapi.yml)
[![Angular WebApp Build](https://github.com/khaneliman/austin-horstman/actions/workflows/angular-webapp.yml/badge.svg)](https://github.com/khaneliman/austin-horstman/actions/workflows/angular-webapp.yml)
[![.NET WebApi Build](https://github.com/khaneliman/austin-horstman/actions/workflows/dotnet-webapi.yml/badge.svg)](https://github.com/khaneliman/austin-horstman/actions/workflows/dotnet-webapi.yml)

## Description

_The what, why, and how:_

Personal portfolio website showcasing professional experience, projects, and skills. Built with Angular 22.x and powered by Bun for optimal performance. The application features a modern navigation system, interactive project showcases, and comprehensive professional information. Contains all projects related to my time as a software engineer and detailed resume information for anyone interested in learning more.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Docker Deployment](#docker-deployment)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)

## Installation

_Steps required to install project and how to get the development environment running:_

### Prerequisites

- **Bun**: Install [Bun](https://bun.sh/) runtime and package manager
- **.NET SDK** (demo only): Use the exact SDK pinned in `WebApi/global.json` for the optional WebApi demo
- **Node.js 22+** (demo tests only): Runs the built-in HTTP integration tests
- **Docker** (optional): For containerized deployment

### Frontend Setup (Angular WebApp)

```bash
cd WebApp
bun install                # Install dependencies
bun run start:dev          # Start development server
```

### Optional demo setup (.NET WebApi)

If this is your first time with dotnet development locally, you must trust the local https development certificates:

```bash
dotnet dev-certs https --trust
```

## Usage

_Instructions and examples for use:_

### Frontend Development

```bash
cd WebApp
bun run start:dev          # Development server with hot reload
bun run build:dev          # Development build
bun run watch              # Watch mode development
```

### Optional demo development

```bash
cd WebApi
dotnet watch run           # Development server with hot reload
```

### Production Build

```bash
cd WebApp
bun run build:prod         # Production build
bun run docker:build       # Docker production build
```

## Docker Deployment

Production Compose uses the hardened image and binds WebApp to `127.0.0.1:8080`:

```bash
docker compose up --build --detach
```

The default stack runs only the frontend. WebApi is a template demo, not a portfolio dependency. Opt in explicitly:

```bash
docker compose --profile demo up --build --detach
```

The demo API is available only on the internal Docker network. Compose publishes no WebApi host port.

Use the explicit development configuration when you need the development servers:

```bash
docker compose -f docker-compose.development.yml up --build
```

Read the [homelab deployment controls](docs/homelab-deployment.md) before configuring the Unraid template or reverse proxy.

## Contributing

_If you would like to contribute it, you can follow these guidelines for how to do so._

- Create feature branches and submit a PR into main.

## Tests

_Tests for application and how to run them:_

### Frontend Tests (Bun)

```bash
cd WebApp
bun run test               # Run all tests
bun run test:coverage      # Run tests with coverage report
bun run test:watch         # Run tests in watch mode
bun run test:ci            # Run tests for CI environment
```

### Optional demo endpoint tests

Use the pinned .NET SDK and Node.js 22+. Run inside `WebApi` so `global.json` selects the SDK:

```bash
cd WebApi
dotnet restore --locked-mode
dotnet build --configuration Release --no-restore
node --test tests/endpoints.test.mjs
```

These execute three HTTP integration tests against the Release DLL in Production: weather forecast data and two Swagger routes that must return 404. There is no .NET test project; `dotnet test` does not exercise these endpoints.

### Quality Assurance

```bash
cd WebApp
bun run check              # Run full quality check (lint + format + test)
bun run lint               # Lint code
bun run format             # Format code with Biome and Prettier
bun run typecheck          # TypeScript compilation check
```

## License

[GNU AGPLv3](https://www.gnu.org/licenses/agpl-3.0.en.html)

---

## Questions?

  <img src="https://avatars.githubusercontent.com/u/1778670?v=4" alt="khaneliman" width="40%" />

For any questions, please contact me with the information below:

GitHub: [@khaneliman](https://api.github.com/users/khaneliman)
