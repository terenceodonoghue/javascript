/** @jsxImportSource @emotion/react */
import { Interpolation, Theme } from '@emotion/react';
import { ComponentPropsWithoutRef, ElementType } from 'react';

import { rem } from '@terenceodonoghue/css';

type ComponentProps<T extends ElementType> = {
  /**
   * TODO:
   */
  as?: T;
  /**
   * Sets the logical inline start and end margins (in rem)
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin-inline
   */
  mx?: number;
  /**
   * Sets the logical block start and end margins (in rem)
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin-block
   */
  my?: number;
  /**
   * Sets the logical inline start and end padding (in rem)
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding-inline
   */
  px?: number;
  /**
   * Sets the logical block start and end padding (in rem)
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding-block
   */
  py?: number;
  /**
   * Defines custom styles that have access to the theme
   */
  sx?: Interpolation<Theme>;
} & ComponentPropsWithoutRef<T>;

const Component = <T extends ElementType = 'div'>({
  as,
  sx,
  mx,
  my,
  px,
  py,
  ...props
}: ComponentProps<T>) => {
  const Element = as || 'div';
  return (
    <Element
      css={[
        {
          marginInline: rem(mx),
          marginBlock: rem(my),
          paddingInline: rem(px),
          paddingBlock: rem(py),
        },
        sx,
      ]}
      {...props}
    />
  );
};

export default Component;
