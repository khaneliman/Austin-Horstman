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
        {
          devShells.default = pkgs.mkShell {
            name = "austin-horstman-shell";

            buildInputs = with pkgs; [
              # Container tools
              docker
              docker-compose

              # Web development
              bun
              prettier

              # .NET development
              dotnet-sdk
            ];

            shellHook = ''
              echo "🚀 Austin Horstman Development Environment"
              echo "📱 WebApp: Angular with Node.js"
              echo "🌐 WebApi: .NET"
              echo "🐳 Docker & Docker Compose available"
              echo ""
              echo "Available commands:"
              echo "  cd WebApp && npm install    # Setup Angular app"
              echo "  cd WebApi && dotnet restore # Setup .NET API"
              echo "  docker-compose up          # Start full stack"
            '';
          };
        };
    };
}
