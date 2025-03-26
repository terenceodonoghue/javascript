import { useTheme } from '@emotion/react';
import { ComponentPropsWithoutRef } from 'react';

import Component from '../Component.js';

const Card = ({ children, ...props }: ComponentPropsWithoutRef<'article'>) => {
  const { border, color } = useTheme();
  return (
    <Component
      as="article"
      px={1.5}
      py={2}
      sx={{
        borderRadius: border.radius.squared,
        backgroundColor: color.neutral.surface.elevated,
      }}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Card;
