/** @jsxImportSource @emotion/react */
import { classes } from '@terenceodonoghue/css';

import { Box, Content, Primitive } from '../../types.js';

const Text = <T extends Content = 'span'>({
  as,
  cx,
  sx,
  mx = 0,
  my = 0,
  px = 0,
  py = 0,
  ...props
}: Primitive<T, Box>) => {
  const Component = as || 'span';
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

export default Text;
