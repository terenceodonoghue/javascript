import { faker } from '@faker-js/faker';
import { Meta, StoryObj } from '@storybook/react';

import Avatar from './Avatar.js';

const meta: Meta<typeof Avatar> = {
  title: '💎 UI/Atoms/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Usage: Story = {
  args: {
    alt: faker.lorem.sentence(),
    src: faker.image.avatar(),
  },
};

export const Sizes: Story = {
  args: {
    src: faker.image.avatar(),
  },
  render: (args) => (
    <>
      <Avatar {...args} size={2} />
      <Avatar {...args} size={3} />
      <Avatar {...args} size={4} />
      <Avatar {...args} size={5} />
    </>
  ),
};

export const Variants: Story = {
  args: {
    src: faker.image.avatar(),
  },
  render: (args) => (
    <>
      <Avatar {...args} variant="rounded" />
      <Avatar {...args} variant="squared" />
    </>
  ),
};
