import { faker } from '@faker-js/faker';

import { align } from '@terenceodonoghue/css/styles';

import Flex from '../../primitives/Flex.js';
import Avatar from './Avatar.js';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: '💎 UI/Atoms/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
};

export const Size = {
  render: () => (
    <Flex cx={align.items.center}>
      <Avatar src={faker.image.avatar()} size={2} />
      <Avatar src={faker.image.avatar()} size={3} />
      <Avatar src={faker.image.avatar()} size={4} />
      <Avatar src={faker.image.avatar()} size={5} />
    </Flex>
  ),
};

export const Type = {
  render: () => (
    <Flex cx={align.items.center}>
      <Avatar alt="Round avatar" src={faker.image.avatar()} type="rounded" />
      <Avatar alt="Square avatar" src={faker.image.avatar()} type="squared" />
    </Flex>
  ),
};
