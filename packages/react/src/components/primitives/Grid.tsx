/** @jsxImportSource @emotion/react */
import { ElementType } from 'react';

import { Container, Primitive, Styleable } from '../types.js';

export interface GridProps extends Styleable, Container {
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

const Grid = <T extends ElementType = 'div'>({
  as,
  cw = 1,
  gx = 1,
  gy = 1,
  mx = 0,
  my = 0,
  px = 0,
  py = 0,
  sx,
  ...props
}: Primitive<T, GridProps>) => {
  const Element = as || 'div';
  return (
    <Element
      css={[
        {
          display: 'grid',
          gridTemplateColumns: `repeat(auto-fill, minmax(${cw}rem, 1fr))`,
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
