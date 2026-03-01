export const formatDate = (iso: string | null, fallback = '-'): string => {
  if (!iso) return fallback;
  return new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
};
