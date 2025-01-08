/** @jsxImportSource @emotion/react */
import { ElementType } from 'react';

import { classes } from '@terenceodonoghue/css';
import { display, flex } from '@terenceodonoghue/css/styles';

import { Box, Layout, Primitive } from '../../types.js';

interface FlexProps extends Box, Layout {
  /**
   * TODO:
   */
  column?: boolean;
}

const Flex = <T extends ElementType = 'div'>({
  as,
  cx,
  sx,
  column,
  gx = 1,
  gy = 1,
  mx = 0,
  my = 0,
  px = 0,
  py = 0,
  ...props
}: Primitive<T, FlexProps>) => {
  const Component = as || 'div';
  return (
    <Component
      className={classes(
        cx,
        display.flex,
        column ? flex.direction.column : flex.direction.row,
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

export default Flex;
