const responses = JSON.parse(process.env.METRICS_TEST_RESPONSES);
const repos = ['NixOS/nixpkgs', 'nix-community/home-manager', 'nix-community/nixvim', 'Alexays/Waybar'];

globalThis.fetch = async (url) => {
  const query = new URL(url).searchParams.get('q');
  const index = repos.findIndex((repo) => query.startsWith(`repo:${repo} `));
  if (index === -1) throw new Error(`Unexpected metrics query: ${query}`);
  const response = responses[index];
  if (response.networkError) throw new Error(response.networkError);
  return new Response(response.raw ?? JSON.stringify(response.payload), {
    status: response.status ?? 200,
    statusText: response.statusText ?? 'OK',
    headers: { 'Content-Type': 'application/json' },
  });
};
