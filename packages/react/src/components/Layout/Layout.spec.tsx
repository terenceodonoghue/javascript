import { expect, test } from '@playwright/experimental-ct-react';

import { Flex } from './Layout.js';

test.describe('Flex', () => {
  test.describe('element', () => {
    test('renders as a div by default', async ({ mount }) => {
      const component = await mount(<Flex>content</Flex>);

      await expect(component).toHaveJSProperty('tagName', 'DIV');
      await expect(component).toHaveText('content');
    });

    test('renders as a custom element', async ({ mount }) => {
      const component = await mount(<Flex as="section" />);

      await expect(component).toHaveJSProperty('tagName', 'SECTION');
    });

    test('passes through HTML attributes', async ({ mount }) => {
      const component = await mount(<Flex data-testid="flex" id="my-flex" />);

      await expect(component).toHaveAttribute('data-testid', 'flex');
      await expect(component).toHaveAttribute('id', 'my-flex');
    });
  });

  test.describe('styling', () => {
    test('applies flex display', async ({ mount }) => {
      const component = await mount(<Flex />);

      await expect(component).toHaveCSS('display', 'flex');
    });

    test('applies column direction', async ({ mount }) => {
      const component = await mount(<Flex column />);

      await expect(component).toHaveCSS('flex-direction', 'column');
    });

    test('applies spacing', async ({ mount }) => {
      const component = await mount(<Flex px={8} py={12} mx={16} my={24} />);

      await expect(component).toHaveCSS('padding-inline', '8px');
      await expect(component).toHaveCSS('padding-block', '12px');
      await expect(component).toHaveCSS('margin-inline', '16px');
      await expect(component).toHaveCSS('margin-block', '24px');
    });
  });
});
