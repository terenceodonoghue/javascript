import '@emotion/react';
import { CSSProperties } from 'react';

declare module '@emotion/react' {
  export interface Theme {
    border: {
      radius: {
        small: CSSProperties['borderRadius'];
      };
    };
    color: {
      neutral: {
        surface: {
          backdrop: CSSProperties['color'];
          elevated: CSSProperties['color'];
        };
      };
    };
    font: {
      family: CSSProperties['fontFamily'];
    };
  }
}
