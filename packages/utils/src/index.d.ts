// Uint8Array base64 methods (TC39 stage 4, supported in modern browsers)
// Remove once TypeScript includes these in its standard lib

interface Uint8Array<TArrayBuffer extends ArrayBufferLike = ArrayBufferLike> {
  toBase64(options?: {
    alphabet?: 'base64' | 'base64url';
    omitPadding?: boolean;
  }): string;
}

interface Uint8ArrayConstructor {
  fromBase64(
    base64: string,
    options?: {
      alphabet?: 'base64' | 'base64url';
      lastChunkHandling?: 'loose' | 'strict' | 'stop-before-partial';
    },
  ): Uint8Array<ArrayBuffer>;
}
