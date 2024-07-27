/** @jsxImportSource @emotion/react */
import { classes, display } from '@terenceodonoghue/css';

import { Box, Layout, Primitive, Section } from '../types.js';

interface GridProps extends Box, Layout {}

const Grid = <T extends Section = 'div'>({
  as,
  cx,
  sx,
  gx = 1,
  gy = 1,
  mx = 0,
  my = 0,
  px = 0,
  py = 0,
  ...props
}: Primitive<T, GridProps>) => {
  const Component = as || 'div';
  return (
    <Component
      className={classes(cx, display.grid)}
      css={[
        {
          columnGap: `${gx}rem`,
          rowGap: `${gy}rem`,
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

export default Grid;
