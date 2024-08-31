/// <reference types="./emotion.d.ts" />
import { Interpolation, Theme } from '@emotion/react';
import { ComponentPropsWithoutRef, ElementType } from 'react';

export type Primitive<T extends ElementType, P extends object> = {
  /**
   * TODO:
   */
  as?: T;
} & ComponentPropsWithoutRef<T> &
  P;

export interface Container {
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

export interface Themeable {
  /**
   * Defines custom styles that have access to the theme
   */
  sx?: Interpolation<Theme>;
}
