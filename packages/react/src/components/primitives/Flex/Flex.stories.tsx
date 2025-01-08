import { Meta, StoryObj } from '@storybook/react';

import { align } from '@terenceodonoghue/css/styles';

import View from '../View/View.js';
import Flex from './Flex.js';

const meta: Meta<typeof Flex> = {
  title: '📐 Layout/Flex',
  component: Flex,
  decorators: [
    (Story) => (
      <Flex cx={align.items.center}>
        <Story />
      </Flex>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Flex>;

export const Spacing: Story = {
  render: (args) => (
    <>
      <View {...args}>1</View>
      <View {...args}>2</View>
      <View {...args}>3</View>
    </>
  ),
};
