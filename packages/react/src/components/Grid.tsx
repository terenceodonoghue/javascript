/** @jsxImportSource @emotion/react */
import { ComponentPropsWithoutRef, ElementType } from 'react';

export type GridProps<T extends ElementType> = {
  /**
   * TODO:
   */
  as?: T;
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
} & ComponentPropsWithoutRef<T>;

const Grid = <T extends ElementType = 'div'>({
  as,
  cw = 1,
  gx = 1,
  gy = 1,
  mx = 0,
  my = 0,
  px = 0,
  py = 0,
  ...props
}: GridProps<T>) => {
  const Component = as || 'div';
  return (
    <Component
      css={{
        display: 'grid',
        gridTemplateColumns: `repeat(auto-fill, minmax(${cw}rem, 1fr))`,
        columnGap: `${gx}rem`,
        rowGap: `${gy}rem`,
        marginInline: `${mx}rem`,
        marginBlock: `${my}rem`,
        paddingInline: `${px}rem`,
        paddingBlock: `${py}rem`,
      }}
      {...props}
    />
  );
};

export default Grid;
