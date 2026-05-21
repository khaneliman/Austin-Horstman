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
        in
        {
          devShells.default = pkgs.mkShell {
            name = "austin-horstman-shell";

            buildInputs = with pkgs; [
              # Container tools
              docker
              docker-compose

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
              echo "🚀 Austin Horstman Development Environment"
              echo "📱 WebApp: Angular with Node.js"
              echo "🌐 WebApi: .NET"
              echo "🐳 Docker & Docker Compose available"
              echo "🧪 Playwright: playwright"
              echo ""
              echo "Available commands:"
              echo "  cd WebApp && npm install    # Setup Angular app"
              echo "  cd WebApi && dotnet restore # Setup .NET API"
              echo "  docker-compose up          # Start full stack"
              echo "  playwright --help          # Browser automation"
            '';
          };
        };
    };
}
