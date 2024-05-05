/** @jsxImportSource @emotion/react */
import { ElementType } from 'react';

import { classes } from '@terenceodonoghue/css';
import { display } from '@terenceodonoghue/css/layout.css';

import { Container, Primitive } from '../types.js';

type Content = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
type Section = Exclude<ElementType, Content>;

export const Base = <T extends ElementType = 'div'>(
  props: Primitive<T, Container>,
) => {
  const {
    as: Component = 'div',
    cx,
    sx,
    mx = 0,
    my = 0,
    px = 0,
    py = 0,
    ...rest
  } = props;

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
      {...rest}
    />
  );
};

export const Card = <T extends Section = 'div'>(
  props: Primitive<T, Container>,
) => {
  const { as = 'div', sx, ...rest } = props;
  return (
    <Base
      as={as}
      sx={[
        sx,
        ({ border, color }) => ({
          borderRadius: border.radius.small,
          backgroundColor: color.neutral.surface.elevated,
        }),
      ]}
      {...rest}
    />
  );
};

export const Flex = <T extends Section = 'div'>(
  props: Primitive<
    T,
    Container & {
      /**
       * Sets the gap (in rem) between rows and columns
       * @see https://developer.mozilla.org/en-US/docs/Web/CSS/gap
       */
      gx?: number;
    }
  >,
) => {
  const { as = 'div', cx, sx, gx = 1, ...rest } = props;
  return (
    <Base
      as={as}
      cx={[cx, display.flex]}
      sx={[
        sx,
        {
          gap: `${gx}rem`,
        },
      ]}
      {...rest}
    />
  );
};

export const Grid = <T extends Section = 'div'>(
  props: Primitive<
    T,
    Container & {
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
  >,
) => {
  const { as = 'div', cx, sx, cw = 8, gx = 1, gy = 1, ...rest } = props;
  return (
    <Base
      as={as}
      cx={[cx, display.grid]}
      sx={[
        sx,
        {
          gridTemplateColumns: `repeat(auto-fill, minmax(${cw}rem, 1fr))`,
          columnGap: `${gx}rem`,
          rowGap: `${gy}rem`,
        },
      ]}
      {...rest}
    />
  );
};

export const Text = <T extends Content = 'span'>(
  props: Primitive<T, Container>,
) => {
  const { as = 'span', ...rest } = props;
  return <Base as={as} {...rest} />;
};
