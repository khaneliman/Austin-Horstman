import { PersonalProject } from '../components/personal-projects-grid/personal-projects-grid.component';
import { GITHUB_METRICS } from './github-metrics';

const [nixpkgsMetrics, homeManagerMetrics, nixvimMetrics, waybarMetrics] = [
  GITHUB_METRICS.repoMetrics.find((metric) => metric.repo === 'Nixpkgs'),
  GITHUB_METRICS.repoMetrics.find((metric) => metric.repo === 'Home Manager'),
  GITHUB_METRICS.repoMetrics.find((metric) => metric.repo === 'Nixvim'),
  GITHUB_METRICS.repoMetrics.find((metric) => metric.repo === 'Waybar'),
];

// totalMergedPrs spans every tracked repo (including Waybar), so the Nix card
// uses this Nix-only subtotal instead.
const nixMergedPrs =
  (nixpkgsMetrics?.mergedPrs ?? 0) + (homeManagerMetrics?.mergedPrs ?? 0) + (nixvimMetrics?.mergedPrs ?? 0);

export function generatePersonalProjectsGrid(): PersonalProject[] {
  return [
    {
      id: 'khanelinix',
      title: 'Khanelinix',
      description:
        'Comprehensive Nix configuration for cross-platform system management supporting macOS, NixOS, and WSL with advanced declarative infrastructure',
      category: 'System Configuration',
      technologies: [
        'Nix',
        'NixOS',
        'Nix-Darwin',
        'nixos-wsl',
        'Home Manager',
        'Disko',
        'lanzaboote',
        'sops-nix',
        'Stylix',
        'Hyprland',
      ],
      featured: true,
      githubUrl: 'https://github.com/khaneliman/khanelinix',
      status: 'Active',
      startDate: '2023-03',
      projects: [
        {
          name: 'Cross-Platform Configuration',
          description: 'Unified system configuration across macOS, NixOS, and WSL with consistent environments',
          route: '/projects/personal/khanelinix',
          technologies: ['Nix', 'NixOS', 'macOS', 'WSL'],
        },
      ],
      highlights: [
        'Cross-platform system configuration with Nix',
        'Modern desktop environments with Hyprland/Wayland',
        'Comprehensive Home Manager integration',
        'Secret management with sops-nix',
      ],
    },
    {
      id: 'khanelivim',
      title: 'Khanelivim',
      description:
        'Neovim configuration with 100+ plugins, comprehensive language support, and declarative setup using Nixvim',
      category: 'Development Environment',
      technologies: ['Nix', 'Nixvim', 'Neovim', 'LSP', 'Lz.n', 'AI Integration'],
      featured: true,
      githubUrl: 'https://github.com/khaneliman/khanelivim',
      status: 'Active',
      startDate: '2023-03',
      projects: [
        {
          name: 'Neovim Editor',
          description: 'Advanced Neovim setup with GitHub Copilot, Claude Code, and modern completion engines',
          route: '/projects/personal/khanelivim',
          technologies: ['Neovim', 'AI', 'LSP', 'Nixvim'],
        },
      ],
      highlights: [
        '100+ carefully configured plugins',
        'AI integration with GitHub Copilot and Claude Code',
        '20+ programming language support',
        'Fully reproducible with Nix/Nixvim',
      ],
    },
    {
      id: 'nix-ecosystem',
      title: 'Nix Ecosystem Contributions',
      description: `High-signal open source contribution set across Home Manager (${homeManagerMetrics?.mergedPrs ?? 0}), Nixvim (${nixvimMetrics?.mergedPrs ?? 0}), and Nixpkgs (${nixpkgsMetrics?.mergedPrs ?? 0}) with ${nixMergedPrs} merged PRs (as indexed by GitHub author search) as of ${GITHUB_METRICS.asOf}.`,
      category: 'Open Source',
      technologies: ['Nix', 'Bash', 'GitHub Actions', 'GitHub App', 'Python', 'Neovim', 'Lua', 'Documentation'],
      featured: true,
      githubUrl: 'https://github.com/khaneliman',
      status: 'Active',
      startDate: '2023-05',
      projects: [
        {
          name: 'Home Manager',
          description:
            'Contributed module and workflow improvements for Home Manager, including legacy compatibility support and module reliability updates.',
          route: '/projects/personal/home-manager',
          technologies: ['Nix', 'Github Actions', 'NixOS', 'Linux', 'Documentation'],
        },
        {
          name: 'Nixvim',
          description:
            'Added new plugin modules (including AI/LSP and editor tooling integrations) and stabilized startup/runtime behavior in Nixvim.',
          route: '/projects/personal/nixvim',
          technologies: ['Nix', 'Neovim', 'Lua', 'Github Actions'],
        },
        {
          name: 'Nixpkgs',
          description:
            'Handled package update bursts and metadata improvements across vimPlugins, yaziPlugins, and luaPackages, including updater and changelog workflows.',
          route: '/projects/personal/nixpkgs',
          technologies: ['Nix', 'macOS', 'Package Management'],
        },
      ],
      highlights: [
        `Contributed ${homeManagerMetrics?.mergedPrs ?? 0} Home Manager PRs, ${nixvimMetrics?.mergedPrs ?? 0} Nixvim PRs, and ${nixpkgsMetrics?.mergedPrs ?? 0} Nixpkgs PRs (as of ${GITHUB_METRICS.asOf}).`,
        'Focused on contributor-facing quality improvements: stable release workflows, PR scaffolding, metadata consistency, and module reliability.',
        'Expanded package and module reliability for macOS and Linux users via reproducible Nix-based workflows.',
      ],
    },
    {
      id: 'upstream-contributions',
      title: 'Upstream Open Source Contributions',
      description: `Recurring contributions to upstream projects beyond the Nix core, headlined by ${waybarMetrics?.mergedPrs ?? 0} merged PRs to Waybar plus fixes and features across community Neovim plugins and the Hyprland ecosystem (as of ${GITHUB_METRICS.asOf}).`,
      category: 'Open Source',
      technologies: ['C++', 'Lua', 'GTK', 'Wayland', 'Neovim', 'Hyprland'],
      featured: true,
      githubUrl: 'https://github.com/khaneliman',
      status: 'Active',
      startDate: '2023-08',
      projects: [
        {
          name: 'Waybar',
          description: `Contributed ${waybarMetrics?.mergedPrs ?? 0} merged PRs to the Wayland status bar, including module fixes, new functionality, and stability improvements.`,
          route: '',
          technologies: ['C++', 'GTK', 'Wayland'],
        },
        {
          name: 'Neovim Plugins',
          description:
            'Fixes and features across community Neovim plugins including avante.nvim, noice.nvim, blink-cmp-spell, indent-tools.nvim, and kulala.',
          route: '',
          technologies: ['Lua', 'Neovim'],
        },
        {
          name: 'Hyprland Ecosystem',
          description: 'Contributions to the Hyprland Wayland compositor and supporting tooling such as hyprqt6engine.',
          route: '',
          technologies: ['C++', 'Hyprland', 'Wayland'],
        },
      ],
      highlights: [
        `${waybarMetrics?.mergedPrs ?? 0} merged PRs to Waybar (as of ${GITHUB_METRICS.asOf})`,
        'Recurring fixes and features across community Neovim plugins',
        'Contributions to the Hyprland Wayland ecosystem',
      ],
    },
    {
      id: 'portfolio-website',
      title: 'Personal Portfolio Website',
      description:
        'Full-stack portfolio application showcasing professional experience and personal projects with modern web technologies',
      category: 'Web Application',
      technologies: ['Angular 20', 'TypeScript', 'TailwindCSS', 'Bun', '.NET 10', 'Docker'],
      featured: true,
      githubUrl: 'https://github.com/khaneliman/Austin-Horstman',
      liveUrl: 'https://austinhorstman.com',
      status: 'Active',
      startDate: '2024-01',
      projects: [
        {
          name: 'Frontend Application',
          description: 'Angular 20+ SPA with standalone components, TailwindCSS styling, and dynamic routing',
          route: '',
          technologies: ['Angular 20', 'TypeScript', 'TailwindCSS', 'SCSS'],
        },
        {
          name: 'Backend API',
          description: '.NET 10 minimal API providing data services and contact form handling',
          route: '',
          technologies: ['.NET 10', 'C#', 'REST API'],
        },
        {
          name: 'Modern Tooling',
          description: "Bun runtime with Biome linting, Bun's native test runner, and optimized build pipeline",
          route: '',
          technologies: ['Bun', 'Biome', 'Bun Test', 'TypeScript'],
        },
        {
          name: 'DevOps Pipeline',
          description: 'Containerized deployment with CI/CD automation and production optimizations',
          route: '',
          technologies: ['Docker', 'GitHub Actions', 'Jenkins', 'Nginx'],
        },
      ],
      highlights: [
        'Latest Angular 20+ with standalone components architecture',
        'Modern build tooling with Bun runtime and Biome linting',
        'TailwindCSS + SCSS styling with custom gradients',
        "Comprehensive testing with Bun's native test runner and coverage reporting",
        'Production-ready Docker containers with nginx optimization',
      ],
    },
    {
      id: 'dotfiles-configuration',
      title: 'Legacy Dotfiles',
      description:
        'Pre-Nix multi-platform dotfiles for Linux, macOS, and Windows spanning multiple window managers, shells, and developer tooling. Archived in favor of the declarative Khanelinix configuration.',
      category: 'Development Tools',
      technologies: ['Shell', 'Fish', 'Zsh', 'Lua', 'Python', 'PowerShell'],
      featured: true,
      githubUrl: 'https://github.com/khaneliman/dotfiles',
      status: 'Archived',
      startDate: '2022-02',
      projects: [
        {
          name: 'Window Manager Configs',
          description:
            'Desktop environment setups across Hyprland, yabai, AwesomeWM, komorebi, and GNOME for Linux, macOS, and Windows',
          route: '',
          technologies: ['Hyprland', 'yabai', 'AwesomeWM', 'komorebi'],
        },
        {
          name: 'Shell Environment',
          description: 'Fish and Zsh configurations with custom themes, aliases, and developer utilities',
          route: '',
          technologies: ['Fish', 'Zsh', 'Shell'],
        },
        {
          name: 'Editor & CLI Tooling',
          description: 'Neovim, ranger, and terminal tooling configured for a consistent cross-platform workflow',
          route: '',
          technologies: ['Neovim', 'Lua', 'CLI Tools'],
        },
      ],
      highlights: [
        'Multi-platform support across Linux, macOS, and Windows',
        'Configs for multiple window managers (Hyprland, yabai, AwesomeWM, komorebi)',
        'Predecessor to the Nix-based Khanelinix configuration',
      ],
    },
  ];
}
