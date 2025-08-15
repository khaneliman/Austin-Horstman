import { PersonalProject } from '../components/personal-projects-grid/personal-projects-grid.component';

export function generatePersonalProjectsGrid(): PersonalProject[] {
  return [
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
      technologies: ['Angular', 'TypeScript', '.NET', 'Docker', 'Bootstrap'],
      featured: true,
      githubUrl: 'https://github.com/khaneliman/Austin-Horstman',
      liveUrl: 'https://austinhorstman.com',
      status: 'Active',
      startDate: '2024-01',
      projects: [
        {
          name: 'Frontend Application',
          description:
            'Angular-based SPA with responsive design, routing, and dynamic content management',
          route: '',
          technologies: ['Angular', 'TypeScript', 'SCSS'],
        },
        {
          name: 'Backend API',
          description:
            '.NET 6 minimal API providing data services and contact form handling',
          route: '',
          technologies: ['.NET', 'C#', 'REST API'],
        },
        {
          name: 'DevOps Pipeline',
          description:
            'Containerized deployment with CI/CD automation using Docker and GitHub Actions',
          route: '',
          technologies: ['Docker', 'GitHub Actions', 'CI/CD'],
        },
      ],
      highlights: [
        'Modern Angular application with standalone components',
        'Responsive design with Bootstrap customizations',
        'Full CI/CD pipeline with automated testing',
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
          description:
            'Fully configured Neovim setup with LSP, treesitter, and custom keybindings using Nixvim',
          route: '',
          technologies: ['Neovim', 'Nixvim', 'Lua'],
        },
        {
          name: 'Shell Environment',
          description:
            'Zsh configuration with custom themes, aliases, and development utilities',
          route: '',
          technologies: ['Zsh', 'Starship', 'CLI Tools'],
        },
        {
          name: 'System Packages',
          description:
            'Declarative package management for development tools and utilities across platforms',
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
