import { GITHUB_METRICS } from '../../../shared/data/github-metrics';
import { AVAILABLE_THEMES, isThemeName, ThemeName } from '../../../shared/services/theme-palette';

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
  /** Flip the color theme (light / dark). */
  toggleTheme?: boolean;
  /** Switch the active color palette. */
  setPalette?: ThemeName;
}

const HELP_LINES = [
  'available commands:',
  '  help          this list',
  '  whoami        who am i',
  '  ls            what lives here',
  '  nix           the daily driver',
  '  vim           ...good luck',
  '  neofetch      system specs',
  '  theme         flip light / dark',
  '  theme <name>  switch colorscheme',
  '  theme list    show colorschemes',
  '  sudo hire-me  start a conversation',
  '  clear         wipe the screen',
  '  exit          close this',
];

// neofetch's nixos_small logo. Keep it ASCII: the web font has no block
// characters, and fallback glyph widths break the column alignment.
const NEOFETCH_LINES = [
  String.raw`  \\  \\ //     austin@khanelinix`,
  String.raw` ==\\__\\/ //   -----------------`,
  String.raw`   //   \\//    os       NixOS (flakes)`,
  '==//     //==   editor   neovim · nixvim',
  String.raw` //\\___//      shell    zsh`,
  String.raw`// /\\  \\==    wm       Hyprland`,
  String.raw`  // \\  \\     bar      Waybar`,
  '                dotfiles github:khaneliman/khanelinix',
  `                uptime   ${GITHUB_METRICS.totalMergedPrs}+ merged open-source PRs`,
];

const EXIT_WORDS = new Set(['exit', 'quit', 'q', ':q', ':q!', ':wq']);

/** Resolve the `theme …` subcommand family. */
function runThemeCommand(arg: string): TerminalResult {
  if (!arg) return { output: ['flipping the lights...'], toggleTheme: true };
  if (arg === 'list' || arg === 'ls') {
    return {
      output: ['colorschemes:', ...AVAILABLE_THEMES.map((t) => `  ${t.id}`), "try 'theme gruvbox'"],
    };
  }
  if (isThemeName(arg)) {
    return { output: [`colorscheme set: ${arg}`], setPalette: arg };
  }
  return { output: [`theme: unknown colorscheme '${arg}'. try 'theme list'.`] };
}

/** Interpret a single command line. Pure: all effects are described, not run. */
export function runTerminalCommand(raw: string): TerminalResult {
  const input = raw.trim();
  if (!input) return { output: [] };
  const lower = input.toLowerCase();

  if (lower === 'theme' || lower.startsWith('theme ')) {
    return runThemeCommand(lower.slice('theme'.length).trim());
  }

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
    case 'neofetch':
    case 'fastfetch':
      return { output: NEOFETCH_LINES };
    case 'vim':
    case 'nano':
    case 'emacs':
      return { output: [`${lower}: opened. (to exit, try the Konami code... or just :q)`] };
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
