import type { ComponentPropsWithoutRef, ElementType } from 'react';

export interface Container {
  /**
   * Sets the logical inline start and end margins
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin-inline
   */
  mx?: Spacing;
  /**
   * Sets the logical block start and end margins
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin-block
   */
  my?: Spacing;
  /**
   * Sets the logical inline start and end padding
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding-inline
   */
  px?: Spacing;
  /**
   * Sets the logical block start and end padding
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding-block
   */
  py?: Spacing;
}

export type Primitive<T extends ElementType, P extends object> = {
  /**
   * TODO:
   */
  as?: T;
} & ComponentPropsWithoutRef<T> &
  P;

export type Spacing = 0 | 4 | 8 | 12 | 16 | 24 | 32;
