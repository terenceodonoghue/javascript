import { ThemeProvider } from '@emotion/react';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { Preview, ReactRenderer } from '@storybook/react';

import { align, justify } from '@terenceodonoghue/css/styles';
import { minimal } from '@terenceodonoghue/css/themes';

import Flex from '../src/components/primitives/Flex/Flex.js';

const preview: Preview = {
  decorators: [
    (Story, { parameters }) => {
      const { layout } = parameters;
      switch (layout) {
        case 'centered':
          return (
            <Flex cx={align.items.center}>
              <Story />
            </Flex>
          );
        case 'fullscreen':
          return (
            <Flex
              cx={[align.items.center, justify.content.center]}
              sx={(theme) => ({
                backgroundColor: theme.color.neutral.surface.backdrop,
              })}
              px={1.5}
              py={2}
            >
              <Story />
            </Flex>
          );
        default:
          return <Story />;
      }
    },
    withThemeFromJSXProvider<ReactRenderer>({
      themes: minimal,
      defaultTheme: 'light',
      Provider: ThemeProvider,
    }),
  ],
};

export default preview;
