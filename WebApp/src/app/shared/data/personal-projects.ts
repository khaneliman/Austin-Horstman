import { PersonalProject } from '../components/personal-projects-grid/personal-projects-grid.component';

export function generatePersonalProjectsGrid(): PersonalProject[] {
  return [
    {
      id: 'khanelinix',
      title: 'Khanelinix',
      description:
        'Comprehensive Nix configuration for cross-platform system management supporting macOS, NixOS, and WSL with advanced declarative infrastructure',
      category: 'System Configuration',
      technologies: ['Nix', 'NixOS', 'Nix-Darwin', 'Home Manager', 'Hyprland', 'Wayland'],
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
      technologies: ['Nix', 'Nixvim', 'Neovim', 'LSP', 'AI Integration'],
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
      description:
        'Open source contributions and maintenance in the Nix ecosystem, focusing on declarative configuration management and reproducible builds',
      category: 'Open Source',
      technologies: ['Nix', 'Bash', 'GitHub Actions', 'Documentation'],
      featured: true,
      githubUrl: 'https://github.com/khaneliman',
      status: 'Active',
      startDate: '2023-05',
      projects: [
        {
          name: 'Home Manager',
          description:
            'Designed and improved Nix modules for declarative user environment configuration. Refactored modules to support freeform configuration inputs.',
          route: '/projects/personal/home-manager',
          technologies: ['Nix', 'Documentation'],
        },
        {
          name: 'Nixvim',
          description:
            "Enhanced user experience for creating Neovim configurations using Nix's declarative approach. Created new plugin modules and resolved user experience issues.",
          route: '/projects/personal/nixvim',
          technologies: ['Nix', 'Neovim', 'Lua'],
        },
        {
          name: 'Nixpkgs',
          description:
            'Maintains packages and infrastructure for the Nix package manager. Specializes in Darwin (macOS) platform maintenance and package updates.',
          route: '/projects/personal/nixpkgs',
          technologies: ['Nix', 'macOS', 'Package Management'],
        },
      ],
      highlights: [
        'Active maintainer in multiple Nix ecosystem projects',
        'Contributed to improving developer experience',
        'Focus on macOS platform compatibility',
      ],
    },
    {
      id: 'portfolio-website',
      title: 'Personal Portfolio Website',
      description:
        'Full-stack portfolio application showcasing professional experience and personal projects with modern web technologies',
      category: 'Web Application',
      technologies: ['Angular 20', 'TypeScript', 'TailwindCSS', 'Bun', '.NET 6', 'Docker'],
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
          description: '.NET 6 minimal API providing data services and contact form handling',
          route: '',
          technologies: ['.NET 6', 'C#', 'REST API'],
        },
        {
          name: 'Modern Tooling',
          description: 'Bun runtime with Biome linting, Jest testing, and optimized build pipeline',
          route: '',
          technologies: ['Bun', 'Biome', 'Jest', 'TypeScript'],
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
        'TailwindCSS + Bootstrap hybrid styling with custom gradients',
        'Comprehensive testing with Jest and coverage reporting',
        'Production-ready Docker containers with nginx optimization',
      ],
    },
    {
      id: 'dotfiles-configuration',
      title: 'Dotfiles & Development Environment',
      description:
        'Comprehensive dotfiles management using Nix Home Manager for reproducible development environments across multiple platforms',
      category: 'Development Tools',
      technologies: ['Nix', 'Home Manager', 'Shell Scripting', 'Git'],
      featured: true,
      githubUrl: 'https://github.com/khaneliman/khanelinix',
      status: 'Active',
      startDate: '2023-03',
      projects: [
        {
          name: 'Neovim Configuration',
          description: 'Fully configured Neovim setup with LSP, treesitter, and custom keybindings using Nixvim',
          route: '',
          technologies: ['Neovim', 'Nixvim', 'Lua'],
        },
        {
          name: 'Shell Environment',
          description: 'Zsh configuration with custom themes, aliases, and development utilities',
          route: '',
          technologies: ['Zsh', 'Starship', 'CLI Tools'],
        },
        {
          name: 'System Packages',
          description: 'Declarative package management for development tools and utilities across platforms',
          route: '',
          technologies: ['Nix', 'Package Management'],
        },
      ],
      highlights: [
        'Cross-platform compatibility (Linux/macOS)',
        'Declarative configuration management',
        'Version-controlled development environment',
      ],
    },
  ];
}
