/** Outcome of interpreting one terminal line. The component performs effects. */
export interface TerminalResult {
  /** Lines to echo beneath the prompt. */
  output: string[];
  /** Wipe the scrollback. */
  clear?: boolean;
  /** Close the overlay. */
  close?: boolean;
  /** Router URL to navigate to. */
  navigate?: string;
  /** Flip the color theme. */
  toggleTheme?: boolean;
}

const HELP_LINES = [
  'available commands:',
  '  help          this list',
  '  whoami        who am i',
  '  ls            what lives here',
  '  nix           the daily driver',
  '  vim           ...good luck',
  '  theme         flip light / dark',
  '  sudo hire-me  start a conversation',
  '  clear         wipe the screen',
  '  exit          close this',
];

const EXIT_WORDS = new Set(['exit', 'quit', 'q', ':q', ':q!', ':wq']);

/** Interpret a single command line. Pure: all effects are described, not run. */
export function runTerminalCommand(raw: string): TerminalResult {
  const input = raw.trim();
  if (!input) return { output: [] };
  const lower = input.toLowerCase();

  switch (lower) {
    case 'help':
    case '?':
      return { output: HELP_LINES };
    case 'whoami':
      return {
        output: [
          'austin horstman — solution architect',
          'modernizing .NET + Angular systems; nixpkgs / home-manager / nixvim maintainer.',
          'if you found this, you probably read keybindings for fun too. respect.',
        ],
      };
    case 'ls':
      return { output: ['about/  resume/  projects/  now/  contact/  flake.nix  .vimrc'] };
    case 'nix':
      return {
        output: [
          '$ nix run github:khaneliman/khanelinix',
          'reproducible by design — if it builds on my machine, it builds on yours.',
        ],
      };
    case 'vim':
    case 'nano':
    case 'emacs':
      return { output: [`${lower}: opened. (to exit, try the Konami code... or just :q)`] };
    case 'theme':
      return { output: ['flipping the lights...'], toggleTheme: true };
    case 'sudo hire-me':
      return { output: ['access granted. routing you to contact...'], navigate: '/personal/contact', close: true };
    case 'clear':
      return { output: [], clear: true };
  }

  if (EXIT_WORDS.has(lower)) return { output: [], close: true };
  if (lower.startsWith('sudo')) {
    return { output: [`${input}: permission denied. this incident will be reported.`] };
  }

  return { output: [`command not found: ${input}. try 'help'.`] };
}
