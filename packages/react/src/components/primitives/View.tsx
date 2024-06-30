/** @jsxImportSource @emotion/react */
import { classes } from '@terenceodonoghue/css';

import { Container, Primitive, Section } from '../types.js';

const View = <T extends Section = 'div'>({
  as,
  cx,
  sx,
  mx = 0,
  my = 0,
  px = 0,
  py = 0,
  ...props
}: Primitive<T, Container>) => {
  const Component = as || 'div';
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
      {...props}
    />
  );
};

export default View;
