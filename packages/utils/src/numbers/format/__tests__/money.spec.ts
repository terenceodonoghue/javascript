import { describe, expect, test } from 'vitest';

import money from '../money.js';

describe('money', () => {
  test('standard', () => {
    expect(money()).toBe('$0');
    expect(money(1)).toBe('$1');
    expect(money(1.5)).toBe('$1.50');
    expect(money(1000)).toBe('$1,000');
  });

  test('compact', () => {
    expect(money(1000, { compact: true })).toBe('$1K');
    expect(money(1500, { compact: true })).toBe('$1.5K');
  });
});
