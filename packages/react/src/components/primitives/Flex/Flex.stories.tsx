import { Meta, StoryObj } from '@storybook/react';

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

export const Spacing: Story = {
  render: (args) => (
    <Flex {...args}>
      <span>1</span>
      <span>2</span>
      <span>3</span>
    </Flex>
  ),
};
