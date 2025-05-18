import { Interpolation, Theme } from '@emotion/react';
import { ComponentPropsWithoutRef, ElementType } from 'react';

export type Primitive<T extends ElementType, P extends object> = {
  /**
   * TODO:
   */
  as?: T;
  /**
   * Defines custom styles that have access to the theme
   */
  sx?: Interpolation<Theme>;
} & ComponentPropsWithoutRef<T> &
  P;

export interface Box {
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
}

export interface Layout {
  /**
   * Sets the size of the gap (gutter) between an element's columns (in rem)
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/column-gap
   */
  gx?: number;
  /**
   * Sets the size of the gap (gutter) between an element's rows (in rem)
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/row-gap
   */
  gy?: number;
}
