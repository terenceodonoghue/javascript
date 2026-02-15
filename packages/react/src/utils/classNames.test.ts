import { classNames } from './classNames';
import { describe, expect, test } from 'bun:test';

describe('classNames', () => {
  test('joins multiple strings', () => {
    expect(classNames('a', 'b')).toBe('a b');
  });

  test('returns a single string as-is', () => {
    expect(classNames('a')).toBe('a');
  });

  test('flattens arrays', () => {
    expect(classNames(['a', 'b'], 'c')).toBe('a b c');
  });

  test('filters empty strings', () => {
    expect(classNames('a', '', 'b')).toBe('a b');
  });

  test('returns empty string for no arguments', () => {
    expect(classNames()).toBe('');
  });
});
