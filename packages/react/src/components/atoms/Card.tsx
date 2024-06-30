import { PropsWithChildren } from 'react';

import View from '../primitives/View.js';
import { Container } from '../types.js';

const Card = ({
  px = 1.5,
  py = 1.5,
  ...props
}: PropsWithChildren<Container>) => (
  <View
    as="article"
    px={px}
    py={py}
    sx={({ border, color }) => ({
      borderRadius: border.radius.small,
      backgroundColor: color.neutral.surface.elevated,
    })}
    {...props}
  />
);

export default Card;
