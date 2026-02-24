/**
 * Appends the current `redirect_uri` search param (if present) to a path.
 */
export const withRedirect = (path: string): string => {
  const redirectUri = new URLSearchParams(window.location.search).get(
    'redirect_uri',
  );
  if (!redirectUri) return path;
  const separator = path.includes('?') ? '&' : '?';
  return `${path}${separator}redirect_uri=${encodeURIComponent(redirectUri)}`;
};
