/** @jsxImportSource @emotion/react */
import { ElementType } from 'react';

import { rem } from '@terenceodonoghue/css/utils';

import { Box, Layout, Primitive } from '../types.js';

interface ViewProps extends Box, Layout {
  /**
   * TODO:
   */
  layout?: 'flex' | 'grid';
}

export const View = <T extends ElementType = 'div'>({
  as,
  gx,
  gy,
  mx,
  my,
  px,
  py,
  sx,
  layout,
  ...rest
}: Primitive<T, ViewProps>) => {
  const Element = as || 'div';
  return (
    <Element
      css={[
        {
          display: layout,
          columnGap: rem(gx),
          rowGap: rem(gy),
          marginInline: rem(mx),
          marginBlock: rem(my),
          paddingInline: rem(px),
          paddingBlock: rem(py),
        },
        sx,
      ]}
      {...rest}
    />
  );
};
