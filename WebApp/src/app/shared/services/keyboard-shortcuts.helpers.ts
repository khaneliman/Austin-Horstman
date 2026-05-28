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

export const SHORTCUT_BINDINGS: readonly ShortcutBinding[] = [
  { sequence: 'g h', description: 'Go to Home' },
  { sequence: 'g a', description: 'Go to About' },
  { sequence: 'g c', description: 'Go to Contact' },
  { sequence: 'g r', description: 'Go to Resume' },
  { sequence: 'g p', description: 'Go to Projects' },
  { sequence: 'g n', description: 'Go to Now' },
  { sequence: '/', description: 'Open command palette' },
  { sequence: '⌘ K', description: 'Open command palette' },
  { sequence: 'Esc', description: 'Close overlay' },
];

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
