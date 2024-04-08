{
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs =
    {
      self,
      nixpkgs,
      flake-utils,
      ...
    }:
    flake-utils.lib.eachDefaultSystem (
      system:
      let
        pkgs = import nixpkgs { inherit system; };
      in
      with pkgs;
      {
        devShells.default = mkShell {
          name = "khaneliman-web-app-shell";

          buildInputs = with pkgs; [
            docker
            nodejs_20
          ];

          # nativeBuildInputs = with pkgs; [ pkg-config ];
        };
      }
    );
}
