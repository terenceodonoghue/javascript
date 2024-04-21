import {
  ThemeProvider as EmotionProvider,
  ThemeProviderProps,
} from '@emotion/react';

import defaultTheme from '../themes/default.js';

const ThemeProvider = ({
  children,
  theme = defaultTheme,
}: Partial<ThemeProviderProps>) => (
  <EmotionProvider theme={theme}>{children}</EmotionProvider>
);

export default ThemeProvider;
