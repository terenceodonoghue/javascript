import { ComponentPropsWithoutRef } from 'react';

import { border } from '@terenceodonoghue/css/styles';

import View from '../../primitives/View/View.js';

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

const Avatar = ({
  alt,
  size = 2.5,
  variant = 'rounded',
  ...props
}: AvatarProps) => {
  const style: keyof typeof border.radius =
    variant === 'rounded' ? 'circle' : 'subtle';

  return (
    <View
      as="img"
      cx={border.radius[style]}
      sx={{ height: `${size}rem`, width: `${size}rem` }}
      alt={alt}
      {...props}
    />
  );
};

export default Avatar;
