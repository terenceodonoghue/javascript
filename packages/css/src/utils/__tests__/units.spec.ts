import { describe, expect, it } from 'vitest';

import { rem } from '../units.js';

describe('rem', () => {
  it('returns TODO:', () => {
    expect(rem(0)).toBe(0);
    expect(rem(undefined)).toBe(undefined);
    expect(rem(1)).toBe('1rem');
  });
});
