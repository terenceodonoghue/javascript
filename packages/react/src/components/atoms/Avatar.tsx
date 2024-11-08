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
  type?: 'rounded' | 'squared';
}

const Avatar = ({
  alt,
  size = 2.5,
  type = 'rounded',
  ...props
}: AvatarProps) => {
  const style: keyof typeof border.radius =
    type === 'rounded' ? 'circle' : 'subtle';

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
