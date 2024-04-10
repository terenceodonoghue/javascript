/** @jsxImportSource @emotion/react */
import { ElementType } from 'react';

import { Container, Primitive, Styleable } from '../types.js';

export interface FlexProps extends Styleable, Container {
  /**
   * Sets the gap (in rem) between rows and columns
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/gap
   */
  gx?: number;
}

const Flex = <T extends ElementType = 'div'>({
  as,
  gx = 1,
  mx = 0,
  my = 0,
  px = 0,
  py = 0,
  sx,
  ...props
}: Primitive<T, FlexProps>) => {
  const Element = as || 'div';
  return (
    <Element
      css={[
        {
          display: 'flex',
          gap: `${gx}rem`,
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
