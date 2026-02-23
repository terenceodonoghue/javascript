export const toBase64url = (buf: ArrayBuffer): string =>
  new Uint8Array(buf).toBase64({ alphabet: 'base64url', omitPadding: true });

export const fromBase64url = (b64: string): ArrayBuffer =>
  Uint8Array.fromBase64(b64, { alphabet: 'base64url' }).buffer;
