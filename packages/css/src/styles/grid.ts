import { css } from '@emotion/css';

export const templateColumns = {
  /**
   * @param size sets the column width (in rem)
   */
  autoFill: (size: number) =>
    css({
      gridTemplateColumns: `repeat(auto-fill, minmax(${size}rem, 1fr))`,
    }),
};
