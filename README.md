# Austin Horstman Dotnet Angular App

  ![Badge for GitHub repo top language](https://img.shields.io/github/languages/top/khaneliman/austin-horstman?style=flat&logo=appveyor)
  ![Badge for GitHub last commit](https://img.shields.io/github/last-commit/khaneliman/austin-horstman?style=flat&logo=appveyor)

  [![Docker WebApp - Develop](https://github.com/khaneliman/austin-horstman/actions/workflows/docker-webapp.yml/badge.svg)](https://github.com/khaneliman/austin-horstman/actions/workflows/docker-webapp.yml)
  [![Docker WebApp - Develop](https://github.com/khaneliman/austin-horstman/actions/workflows/docker-webapi.yml/badge.svg)](https://github.com/khaneliman/austin-horstman/actions/workflows/docker-webapi.yml)
  [![Angular WebApp Build](https://github.com/khaneliman/austin-horstman/actions/workflows/angular-webapp.yml/badge.svg)](https://github.com/khaneliman/austin-horstman/actions/workflows/angular-webapp.yml)
  [![.NET WebApi Build](https://github.com/khaneliman/austin-horstman/actions/workflows/dotnet-webapi.yml/badge.svg)](https://github.com/khaneliman/austin-horstman/actions/workflows/dotnet-webapi.yml)
  
## Description
  
  *The what, why, and how:*
  
  Personal portfolio website showcasing professional experience, projects, and skills. Built with Angular 20.x and powered by Bun for optimal performance. The application features a modern navigation system, interactive project showcases, and comprehensive professional information. Contains all projects related to my time as a software engineer and detailed resume information for anyone interested in learning more.

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [License](#license)
  
## Installation
  
  *Steps required to install project and how to get the development environment running:*

### Prerequisites
  
- **Bun**: Install [Bun](https://bun.sh/) runtime and package manager
- **.NET SDK**: [.NET](https://dotnet.microsoft.com/download/) 6+ is required for the backend API
- **Docker** (optional): For containerized deployment

### Frontend Setup (Angular WebApp)
  
```bash
cd WebApp
bun install                # Install dependencies
bun run start:dev          # Start development server
```

### Backend Setup (.NET WebAPI)
  
If this is your first time with dotnet development locally, you must trust the local https development certificates:

```bash
dotnet dev-certs https --trust
```
  
## Usage
  
  *Instructions and examples for use:*

### Frontend Development
  
```bash
cd WebApp
bun run start:dev          # Development server with hot reload
bun run build:dev          # Development build
bun run watch              # Watch mode development
```

### Backend Development
  
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
  
## Contributing
  
  *If you would like to contribute it, you can follow these guidelines for how to do so.*
  
* Create feature branches and submit a PR into develop.
  
## Tests
  
  *Tests for application and how to run them:*

### Frontend Tests (Bun)
  
```bash
cd WebApp
bun run test               # Run all tests
bun run test:coverage      # Run tests with coverage report
bun run test:watch         # Run tests in watch mode
bun run test:ci            # Run tests for CI environment
```

### Backend Tests (.NET)
  
```bash
cd WebApp
dotnet test                # Run .NET tests for WebApp
      
cd WebApi
dotnet test                # Run .NET tests for WebApi
```

### Quality Assurance
  
```bash
cd WebApp
bun run check              # Run full quality check (lint + format + test)
bun run lint               # Lint code
bun run format             # Format code with Prettier
bun run typecheck          # TypeScript compilation check
```

## License
  
  [GNU AGPLv3](https://www.gnu.org/licenses/agpl-3.0.en.html)
  
  ---
  
## Questions?

  <img src="https://avatars.githubusercontent.com/u/1778670?v=4" alt="khaneliman" width="40%" />
  
  For any questions, please contact me with the information below:

  GitHub: [@khaneliman](https://api.github.com/users/khaneliman)
  
