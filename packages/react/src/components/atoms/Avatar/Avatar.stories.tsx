import { faker } from '@faker-js/faker';
import { Meta, StoryObj } from '@storybook/react';

import { align } from '@terenceodonoghue/css/styles';

import Flex from '../../primitives/Flex/Flex.js';
import Avatar from './Avatar.js';

const meta: Meta<typeof Avatar> = {
  title: '💎 UI/Atoms/Avatar',
  component: Avatar,
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
type Story = StoryObj<typeof Avatar>;

export const Usage: Story = {
  render: (args) => (
    <>
      <Avatar alt="Avatar 1" src={faker.image.avatar()} {...args} />
      <Avatar alt="Avatar 2" src={faker.image.avatar()} {...args} />
      <Avatar alt="Avatar 3" src={faker.image.avatar()} {...args} />
    </>
  ),
};

export const Sizes: Story = {
  args: {
    src: faker.image.avatar(),
  },
  render: (args) => (
    <>
      <Avatar size={2} {...args} />
      <Avatar size={3} {...args} />
      <Avatar size={4} {...args} />
      <Avatar size={5} {...args} />
    </>
  ),
};

export const Variants: Story = {
  args: {
    src: faker.image.avatar(),
  },
  render: (args) => (
    <>
      <Avatar variant="rounded" {...args} />
      <Avatar variant="squared" {...args} />
    </>
  ),
};
