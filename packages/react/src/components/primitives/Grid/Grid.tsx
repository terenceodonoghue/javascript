/** @jsxImportSource @emotion/react */
import { ElementType } from 'react';

import { classes } from '@terenceodonoghue/css';
import { display, grid } from '@terenceodonoghue/css/styles';

import { Box, Layout, Primitive } from '../../types.js';

interface GridProps extends Box, Layout {
  /**
   * TODO:
   */
  filled?: number;
}

const Grid = <T extends ElementType = 'div'>({
  as,
  cx,
  sx,
  filled,
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
      className={classes(
        cx,
        display.grid,
        filled ? grid.templateColumns.autoFill(filled) : null,
      )}
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
