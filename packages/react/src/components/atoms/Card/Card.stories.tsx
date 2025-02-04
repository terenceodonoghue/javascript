import { Meta, StoryObj } from '@storybook/react';

import Card from './Card.js';

const meta: Meta<typeof Card> = {
  title: '💎 UI/Atoms/Card',
  component: Card,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Usage: Story = {
  args: {
    children: 'Content',
  },
  render: (args) => (
    <>
      <Card {...args} heading="Heading" />
      <Card {...args} />
    </>
  ),
};
