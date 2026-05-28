const G_PREFIX_ROUTES: Readonly<Record<string, string>> = {
  h: '/home',
  a: '/personal/about',
  c: '/personal/contact',
  r: '/personal/resume',
  p: '/projects',
  n: '/now',
};

export interface ShortcutBinding {
  sequence: string;
  description: string;
}

export interface ShortcutGroup {
  label: string;
  bindings: readonly ShortcutBinding[];
}

export const SHORTCUT_GROUPS: readonly ShortcutGroup[] = [
  {
    label: 'Navigate',
    bindings: [
      { sequence: 'g h', description: 'Home' },
      { sequence: 'g a', description: 'About' },
      { sequence: 'g c', description: 'Contact' },
      { sequence: 'g r', description: 'Resume' },
      { sequence: 'g p', description: 'Projects' },
      { sequence: 'g n', description: 'Now' },
    ],
  },
  {
    label: 'Global',
    bindings: [
      { sequence: '⌘ K', description: 'Open command palette' },
      { sequence: '/', description: 'Open command palette' },
      { sequence: '?', description: 'Toggle this cheatsheet' },
      { sequence: 'Esc', description: 'Close overlay' },
    ],
  },
];

export const SHORTCUT_BINDINGS: readonly ShortcutBinding[] = SHORTCUT_GROUPS.flatMap((group) => group.bindings);

export const SHORTCUT_PREFIX_TIMEOUT_MS = 1500;

export function isEditableTarget(target: EventTarget | null): boolean {
  if (!target) return false;
  const el = target as { tagName?: string; isContentEditable?: boolean };
  if (el.isContentEditable) return true;
  const tag = el.tagName;
  return tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT';
}

export function resolveGPrefixRoute(key: string): string | undefined {
  return G_PREFIX_ROUTES[key.toLowerCase()];
}
