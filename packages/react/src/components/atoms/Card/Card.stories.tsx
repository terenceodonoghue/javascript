import { Meta, StoryObj } from '@storybook/react';

import { align, justify } from '@terenceodonoghue/css/styles';

import Flex from '../../primitives/Flex/Flex.js';
import Card from './Card.js';

const meta: Meta<typeof Card> = {
  title: '💎 UI/Atoms/Card',
  component: Card,
  decorators: [
    (Story) => (
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
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Usage: Story = {
  render: (args) => (
    <>
      <Card {...args} heading="Heading">
        Content
      </Card>
      <Card {...args}>Content</Card>
    </>
  ),
};
