import { useTheme } from '@emotion/react';
import { ComponentPropsWithoutRef } from 'react';

import { rem } from '@terenceodonoghue/css';

import Component from '../Component.js';

interface AvatarProps extends ComponentPropsWithoutRef<'img'> {
  /**
   * TODO:
   */
  size?: number;
  /**
   * TODO:
   */
  variant?: 'rounded' | 'squared';
}

const Avatar = ({ size = 2.5, variant = 'rounded', ...props }: AvatarProps) => {
  const { border } = useTheme();
  return (
    <Component
      as="img"
      sx={{
        borderRadius: border.radius[variant],
        height: rem(size),
        width: rem(size),
      }}
      {...props}
    />
  );
};

export default Avatar;
