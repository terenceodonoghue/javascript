/** @jsxImportSource @emotion/react */
import { ElementType } from 'react';

import { classes } from '@terenceodonoghue/css';

import { Box, Primitive } from '../../types.js';

const View = <T extends ElementType = 'div'>({
  as,
  cx,
  sx,
  mx = 0,
  my = 0,
  px = 0,
  py = 0,
  ...props
}: Primitive<T, Box>) => {
  const Component = as || 'span';
  return (
    <Component
      className={classes(cx)}
      css={[
        {
          marginInline: `${mx}rem`,
          marginBlock: `${my}rem`,
          paddingInline: `${px}rem`,
          paddingBlock: `${py}rem`,
        },
        sx,
      ]}
      {...props}
    />
  );
};

export default View;
