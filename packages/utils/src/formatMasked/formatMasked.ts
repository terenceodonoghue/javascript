export const formatMasked = (value: string, length: number): string => {
  if (value.length <= length * 2) return value;
  const prefix = value.slice(0, length);
  const suffix = value.slice(-length);
  return `${prefix}${'•'.repeat(length)}${suffix}`;
};
