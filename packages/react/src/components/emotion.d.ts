import '@emotion/react';
import { CSSProperties } from 'react';

declare module '@emotion/react' {
  export interface Theme {
    font?: {
      family?: CSSProperties['fontFamily'];
    };
  }
}
