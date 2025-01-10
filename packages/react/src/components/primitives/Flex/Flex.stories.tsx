import { Meta, StoryObj } from '@storybook/react';

import { justify } from '@terenceodonoghue/css/styles';

import Card from '../../atoms/Card/Card.js';
import Flex from './Flex.js';

const meta: Meta<typeof Flex> = {
  title: '📐 Layout/Flex',
  component: Flex,
  decorators: [
    (Story) => (
      <Flex
        cx={justify.content.center}
        sx={(theme) => ({
          backgroundColor: theme.color.neutral.surface.backdrop,
        })}
        px={1.5}
        py={2}
      >
        <Story />
      </Flex>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Flex>;

export const Spacing: Story = {
  render: (args) => (
    <>
      <Card {...args}>1</Card>
      <Card {...args}>2</Card>
      <Card {...args}>3</Card>
    </>
  ),
};
