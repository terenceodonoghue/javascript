import { useTheme } from '@emotion/react';
import { ComponentPropsWithoutRef } from 'react';

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

const Avatar = ({ size = 2.5, variant = 'rounded', ...props }: AvatarProps) => {
  const { border } = useTheme();
  return (
    <View
      as="img"
      sx={{
        borderRadius: border.radius[variant],
        height: `${size}rem`,
        width: `${size}rem`,
      }}
      {...props}
    />
  );
};

export default Avatar;
