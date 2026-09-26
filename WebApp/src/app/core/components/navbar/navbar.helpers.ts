/**
 * Whether `url` is on `route`, or anywhere beneath it unless `exact`. Query
 * strings and fragments are ignored, and an empty path counts as /home.
 */
export function isActiveRoute(url: string, route: string, exact = false): boolean {
  const path = url.split(/[?#]/)[0] || '/home';
  return exact ? path === route : path === route || path.startsWith(`${route}/`);
}
