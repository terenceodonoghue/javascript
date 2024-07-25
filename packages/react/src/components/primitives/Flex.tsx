/** @jsxImportSource @emotion/react */
import { CSSProperties } from 'react';

import { classes, display, flexDirection } from '@terenceodonoghue/css';

import { Container, Primitive, Section } from '../types.js';

interface FlexProps extends Container {
  /**
   * TODO:
   */
  column?: boolean;
  /**
   * Controls the alignment of items on the cross axis
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/align-items
   */
  align?: CSSProperties['alignItems'];
  /**
   * Defines how the browser distributes space between and around content items along the main axis
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content
   */
  justify?: CSSProperties['justifyContent'];
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

const Flex = <T extends Section = 'div'>({
  as,
  cx,
  sx,
  mx = 0,
  my = 0,
  px = 0,
  py = 0,
  gx = 1,
  gy = 1,
  column,
  align,
  justify,
  ...props
}: Primitive<T, FlexProps>) => {
  const Component = as || 'div';
  return (
    <Component
      className={classes(cx, display.flex, column && flexDirection.column)}
      css={[
        {
          alignItems: align,
          justifyContent: justify,
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
