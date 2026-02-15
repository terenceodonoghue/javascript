import type { ElementType } from 'react';

import { classNames } from '../../utils/classNames';
import type { Container, Primitive } from '../types';
import { flexbox, spacing } from './Layout.helpers';

export interface FlexProps extends Container {
  column?: boolean;
}

export const Flex = <T extends ElementType = 'div'>({
  as,
  mx,
  my,
  px,
  py,
  column,
  ...rest
}: Primitive<T, FlexProps>) => {
  const Element = as || 'div';
  const className = classNames(
    flexbox({ column }),
    spacing({ mx, my, px, py }),
  );

  return <Element className={className} {...rest} />;
};
