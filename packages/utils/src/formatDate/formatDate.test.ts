import { describe, expect, test } from 'bun:test';

import { formatDate } from './formatDate';

describe('formatDate', () => {
  test('formats an ISO date string in en-GB', () => {
    expect(formatDate('2025-03-15T10:30:00Z')).toBe('15 Mar 2025');
  });

  test('returns fallback for null', () => {
    expect(formatDate(null)).toBe('-');
  });

  test('returns fallback for empty string', () => {
    expect(formatDate('')).toBe('-');
  });

  test('returns custom fallback when provided', () => {
    expect(formatDate(null, 'Never')).toBe('Never');
  });

  test('returns custom fallback for empty string', () => {
    expect(formatDate('', 'N/A')).toBe('N/A');
  });

  test('formats a date-only string', () => {
    expect(formatDate('2024-01-01')).toBe('1 Jan 2024');
  });
});
