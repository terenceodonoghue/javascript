import { Meta, StoryObj } from '@storybook/react';

import { align } from '@terenceodonoghue/css/styles';

import Flex from './Flex.js';

const meta: Meta<typeof Flex> = {
  title: '📐 Layout/Flex',
  component: Flex,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Flex>;

export const Type: Story = {
  render: () => <Flex cx={align.items.center}>Test</Flex>,
};
