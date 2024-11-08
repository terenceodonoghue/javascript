import {
  ThemeProvider as EmotionProvider,
  type ThemeProviderProps,
} from '@emotion/react';

import { minimal } from '@terenceodonoghue/css/themes';

const ThemeProvider = ({
  children,
  theme = minimal.light,
}: Partial<ThemeProviderProps>) => (
  <EmotionProvider theme={theme}>{children}</EmotionProvider>
);

export default ThemeProvider;
