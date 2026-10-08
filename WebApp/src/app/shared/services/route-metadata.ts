import type { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

export const SITE_URL = 'https://austinhorstman.dev';
export const SHARING_IMAGE = `${SITE_URL}/assets/images/austin2.jpg`;
export const HOME_METADATA = {
  title: 'Austin Horstman - Full Stack Developer Portfolio',
  description:
    'Austin Horstman - Full Stack Developer specializing in Angular, .NET, and modern web technologies. Professional portfolio showcasing enterprise projects and software development expertise.',
};

export function canonicalUrl(url: string): string {
  const path = (url.split(/[?#]/)[0] ?? '/')
    .split('/')
    .map((segment) => segment.split(';')[0])
    .join('/');
  return SITE_URL + (path === '/home' || path === '/' ? '/' : path);
}

export function resolveRouteMetadata(snapshot: Pick<RouterStateSnapshot, 'root' | 'url'>) {
  let route: ActivatedRouteSnapshot | undefined = snapshot.root;
  let title = HOME_METADATA.title;
  let description = HOME_METADATA.description;
  while (route) {
    if (typeof route.title === 'string') title = route.title;
    if (typeof route.data['description'] === 'string') description = route.data['description'];
    route = route.children.find((child) => child.outlet === 'primary');
  }
  return { title, description, canonical: canonicalUrl(snapshot.url) };
}
