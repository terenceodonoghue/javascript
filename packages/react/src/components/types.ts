/// <reference types="./emotion.d.ts" />
import { ClassNamesArg, Interpolation, Theme } from '@emotion/react';
import { ComponentPropsWithoutRef, ElementType } from 'react';

export type Content = Extract<
  ElementType,
  'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
>;

export type Section = Exclude<ElementType, Content>;

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

export type Primitive<T extends ElementType, P extends object> = {
  /**
   * TODO:
   */
  as?: T;
  /**
   * Defines one or more CSS class names
   */
  cx?: ClassNamesArg;
  /**
   * Defines custom styles that have access to the theme
   */
  sx?: Interpolation<Theme>;
} & ComponentPropsWithoutRef<T> &
  P;
