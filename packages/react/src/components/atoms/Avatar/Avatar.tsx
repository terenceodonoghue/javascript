/** @jsxImportSource @emotion/react */
import { ComponentPropsWithoutRef } from 'react';

import { border } from '@terenceodonoghue/css/styles';

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
    <img
      alt={alt}
      className={border.radius[style]}
      css={{ height: `${size}rem`, width: `${size}rem` }}
      {...props}
    />
  );
};

export default Avatar;
