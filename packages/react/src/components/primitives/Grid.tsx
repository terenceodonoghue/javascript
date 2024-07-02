/** @jsxImportSource @emotion/react */
import { classes, display } from '@terenceodonoghue/css';

import { Container, Primitive, Section } from '../types.js';

interface GridProps extends Container {
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

const Grid = <T extends Section = 'div'>({
  as,
  cx,
  sx,
  mx = 0,
  my = 0,
  px = 0,
  py = 0,
  cw = 8,
  gx = 1,
  gy = 1,
  ...props
}: Primitive<T, GridProps>) => {
  const Component = as || 'div';
  return (
    <Component
      className={classes(cx, display.grid)}
      css={[
        {
          marginInline: `${mx}rem`,
          marginBlock: `${my}rem`,
          paddingInline: `${px}rem`,
          paddingBlock: `${py}rem`,
          gridTemplateColumns: `repeat(auto-fill, minmax(${cw}rem, 1fr))`,
          columnGap: `${gx}rem`,
          rowGap: `${gy}rem`,
        },
        sx,
      ]}
      {...props}
    />
  );
};

export default Grid;
