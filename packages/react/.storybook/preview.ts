import { ThemeProvider } from '@emotion/react';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { Preview, ReactRenderer } from '@storybook/react';

import { minimal } from '@terenceodonoghue/css/themes';

const preview: Preview = {
  decorators: [
    withThemeFromJSXProvider<ReactRenderer>({
      themes: {
        'Minimal (Light)': minimal.light,
      },
      defaultTheme: 'Minimal (Light)',
      Provider: ThemeProvider,
    }),
  ],
};

export default preview;
