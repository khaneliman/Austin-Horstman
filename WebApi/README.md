# Austin Horstman Dotnet Angular App

![Badge for GitHub repo top language](https://img.shields.io/github/languages/top/khaneliman/austin-horstman?style=flat&logo=appveyor)
![Badge for GitHub last commit](https://img.shields.io/github/last-commit/khaneliman/austin-horstman?style=flat&logo=appveyor)

[![Docker WebApi](https://github.com/khaneliman/austin-horstman/actions/workflows/docker-webapi.yml/badge.svg)](https://github.com/khaneliman/austin-horstman/actions/workflows/docker-webapi.yml)
[![.NET WebApi Build](https://github.com/khaneliman/austin-horstman/actions/workflows/dotnet-webapi.yml/badge.svg)](https://github.com/khaneliman/austin-horstman/actions/workflows/dotnet-webapi.yml)

## Demo status

WebApi is the ASP.NET Core weather forecast template, not a backend dependency of the portfolio. Production Compose runs only WebApp by default. From the repository root, opt in with `docker compose --profile demo up --build --detach`. The demo remains on the internal network with no host API port.

## Description

_The what, why, and how:_

A retained ASP.NET Core sample exposing `GET /WeatherForecast`. The portfolio frontend does not call it.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)

## Installation

_Steps required to install project and how to get the development environment running:_

Use the exact [.NET](https://dotnet.microsoft.com/download/) SDK pinned in `global.json`. Node.js 22+ is required for the endpoint tests.

If this is your first time with dotnet development locally. You must trust the local https development certificates.

    dotnet dev-certs https --trust

## Usage

_Instructions and examples for use:_

    cd WebApi
    dotnet watch run

## Contributing

_If you would like to contribute it, you can follow these guidelines for how to do so._

- Create feature branches and submit a PR into develop.

## Tests

_Tests for application and how to run them:_

Run inside `WebApi` so `global.json` selects the SDK:

```bash
cd WebApi
dotnet restore --locked-mode
dotnet build --configuration Release --no-restore
node --test tests/endpoints.test.mjs
```

The Node built-in runner starts the Release DLL in Production on a dynamically assigned loopback HTTP port, waits for the listening message, and stops it afterward. Three HTTP tests check five forecasts (dates, Celsius range, derived Fahrenheit, and summaries) and verify Swagger UI and JSON both return 404 in Production. No external test packages or containers are needed. There is no .NET test project; `dotnet test` does not execute these checks.

## License

[GNU AGPLv3](https://www.gnu.org/licenses/agpl-3.0.en.html)

---

## Questions?

  <img src="https://avatars.githubusercontent.com/u/1778670?v=4" alt="khaneliman" width="40%" />

For any questions, please contact me with the information below:

GitHub: [@khaneliman](https://api.github.com/users/khaneliman)
