/** @jsxImportSource @emotion/react */
import { ElementType } from 'react';

import { classes } from '@terenceodonoghue/css';
import { display } from '@terenceodonoghue/css/layout.css';

import { Container, Primitive } from '../types.js';

interface FlexProps {
  /**
   * Sets the gap (in rem) between rows and columns
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/gap
   */
  gx?: number;
}

interface GridProps {
  /**
   * Sets the column width (in rem)
   */
  cw?: number;
  /**
   * Sets the gap (in rem) between columns
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/column-gap
   */
  gx?: number;
  /**
   * Sets the gap (in rem) between rows
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/row-gap
   */
  gy?: number;
}

export const Base = <T extends ElementType = 'div'>({
  as,
  cx,
  sx,
  mx = 0,
  my = 0,
  px = 0,
  py = 0,
  ...props
}: Primitive<T, Container>) => {
  const Element = as || 'div';
  return (
    <Element
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

export const Card = <T extends ElementType = 'div'>(
  props: Primitive<T, Container>,
) => (
  <Base
    sx={({ border, color }) => ({
      borderRadius: border.radius.small,
      backgroundColor: color.neutral.surface.elevated,
    })}
    {...props}
  />
);

export const Flex = <T extends ElementType = 'div'>({
  cx,
  gx = 1,
  ...props
}: Primitive<T, Container & FlexProps>) => (
  <Base
    cx={[cx, display.flex]}
    sx={{
      gap: `${gx}rem`,
    }}
    {...props}
  />
);

export const Grid = <T extends ElementType = 'div'>({
  cx,
  cw = 8,
  gx = 1,
  gy = 1,
  ...props
}: Primitive<T, Container & GridProps>) => (
  <Base
    cx={[cx, display.grid]}
    sx={{
      gridTemplateColumns: `repeat(auto-fill, minmax(${cw}rem, 1fr))`,
      columnGap: `${gx}rem`,
      rowGap: `${gy}rem`,
    }}
    {...props}
  />
);
