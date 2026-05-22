{
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-parts.url = "github:hercules-ci/flake-parts";
  };

  outputs =
    inputs@{ flake-parts, ... }:
    flake-parts.lib.mkFlake { inherit inputs; } {
      systems = [
        "x86_64-linux"
        "aarch64-linux"
        "x86_64-darwin"
        "aarch64-darwin"
      ];

      perSystem =
        { pkgs, ... }:
        let
          playwrightBrowsers = pkgs.playwright-driver.browsers;
          mkRepoCommand =
            name: text:
            pkgs.writeShellApplication {
              inherit name;
              runtimeInputs = [
                pkgs.bun
                pkgs.docker
                pkgs.dotnet-sdk_10
                pkgs.docker-compose
                pkgs.git
              ];
              text = ''
                repo_root="$(git rev-parse --show-toplevel 2>/dev/null || pwd)"
                ${text}
              '';
            };
        in
        {
          devShells.default = pkgs.mkShell {
            name = "austin-horstman-shell";

            buildInputs = with pkgs; [
              (mkRepoCommand "setup" ''
                (cd "$repo_root/WebApp" && bun install)
                (cd "$repo_root/WebApi" && dotnet restore)
              '')
              (mkRepoCommand "web" ''
                cd "$repo_root/WebApp"
                exec bun run start:dev "$@"
              '')
              (mkRepoCommand "api" ''
                cd "$repo_root/WebApi"
                exec dotnet watch run "$@"
              '')
              (mkRepoCommand "compose" ''
                cd "$repo_root"
                if [ "$#" -eq 0 ]; then
                  set -- up
                fi
                exec docker-compose "$@"
              '')
              (mkRepoCommand "web-test" ''
                cd "$repo_root/WebApp"
                exec bun run test "$@"
              '')
              (mkRepoCommand "coverage" ''
                cd "$repo_root/WebApp"
                exec bun run test:coverage "$@"
              '')
              (mkRepoCommand "check" ''
                cd "$repo_root/WebApp"
                exec bun run check "$@"
              '')
              (mkRepoCommand "typecheck" ''
                cd "$repo_root/WebApp"
                exec bun run typecheck "$@"
              '')
              (mkRepoCommand "format" ''
                cd "$repo_root/WebApp"
                exec bun run format "$@"
              '')
              (mkRepoCommand "build-web" ''
                cd "$repo_root/WebApp"
                exec bun run build:prod "$@"
              '')
              (mkRepoCommand "build-api" ''
                cd "$repo_root/WebApi"
                exec dotnet build --configuration Release "$@"
              '')

              # Container tools
              docker
              docker-compose
              git

              # Web development
              bun
              eslint_d
              nodejs_22
              playwright-test
              prettier

              # .NET development
              dotnet-sdk_10
            ];

            PLAYWRIGHT_BROWSERS_PATH = "${playwrightBrowsers}";
            PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD = "1";
            PLAYWRIGHT_SKIP_VALIDATE_HOST_REQUIREMENTS = "true";

            shellHook = ''
              cat <<'EOF'
              Austin Horstman dev shell

              Commands:
                setup          Install WebApp packages and restore WebApi packages
                web            Start Angular dev server
                api            Start WebApi with dotnet watch
                compose        Start the Docker Compose stack
                web-test       Run WebApp tests
                coverage       Run WebApp tests with coverage
                check          Run WebApp lint, format check, and tests
                typecheck      Run TypeScript type checking
                format         Format WebApp source
                build-web      Build the production WebApp
                build-api      Build the WebApi in Release mode

              First-time HTTPS cert:
                dotnet dev-certs https --trust
              EOF
            '';
          };
        };
    };
}
