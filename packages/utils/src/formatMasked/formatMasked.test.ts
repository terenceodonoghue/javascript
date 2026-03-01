import { describe, expect, test } from 'bun:test';

import { formatMasked } from './formatMasked';

describe('formatMasked', () => {
  test('masks the middle of a string', () => {
    expect(formatMasked('abcdefghijkl', 4)).toBe('abcd••••ijkl');
  });

  test('returns the original string when too short to mask', () => {
    expect(formatMasked('abcdefgh', 4)).toBe('abcdefgh');
  });

  test('returns the original string when exactly double the length', () => {
    expect(formatMasked('abcd', 2)).toBe('abcd');
  });

  test('uses a fixed number of bullets matching the length', () => {
    expect(formatMasked('abcde', 2)).toBe('ab••de');
  });

  test('works with length of 1', () => {
    expect(formatMasked('abc', 1)).toBe('a•c');
  });

  test('masks a long string with fixed bullets', () => {
    expect(formatMasked('abcdefghijklmnopqrst', 4)).toBe('abcd••••qrst');
  });
});
