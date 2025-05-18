import '@emotion/react';

import { Theme as CSSTheme } from '@terenceodonoghue/css/themes';

declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends CSSTheme {}
}
