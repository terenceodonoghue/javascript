interface Options {
  /**
   * Shorten large numbers, e.g. $1K
   */
  compact?: boolean;
}

/**
 * Converts `number` to currency format
 * @param number
 */
const money = (number = 0, { compact = false }: Options = {}): string => {
  return number.toLocaleString('en-AU', {
    compactDisplay: 'short',
    currency: 'AUD',
    maximumFractionDigits: 2,
    minimumFractionDigits: Number.isInteger(number) ? 0 : 2,
    notation: compact ? 'compact' : 'standard',
    style: 'currency',
  });
};

export default money;
