import { describe, expect, test } from 'bun:test';

import { fromBase64url, toBase64url } from './base64url';

const encode = (str: string): ArrayBuffer =>
  new TextEncoder().encode(str).buffer;

const decode = (buf: ArrayBuffer): string =>
  new TextDecoder().decode(new Uint8Array(buf));

describe('toBase64url', () => {
  test('encodes a known value', () => {
    expect(toBase64url(encode('Hello'))).toBe('SGVsbG8');
  });

  test('omits padding', () => {
    const result = toBase64url(encode('a'));
    expect(result).not.toContain('=');
  });

  test('uses base64url alphabet (no + or /)', () => {
    // 0xFB 0xFF 0xFE produces +/in standard base64
    const buf = new Uint8Array([0xfb, 0xff, 0xfe]).buffer;
    const result = toBase64url(buf);
    expect(result).not.toContain('+');
    expect(result).not.toContain('/');
  });

  test('returns empty string for empty input', () => {
    expect(toBase64url(new ArrayBuffer(0))).toBe('');
  });
});

describe('fromBase64url', () => {
  test('decodes a known value', () => {
    expect(decode(fromBase64url('SGVsbG8'))).toBe('Hello');
  });

  test('returns empty ArrayBuffer for empty string', () => {
    expect(fromBase64url('').byteLength).toBe(0);
  });
});

describe('roundtrip', () => {
  test('encode then decode returns original bytes', () => {
    const original = encode('WebAuthn credential data 🔑');
    const result = fromBase64url(toBase64url(original));
    expect(new Uint8Array(result)).toEqual(new Uint8Array(original));
  });
});
