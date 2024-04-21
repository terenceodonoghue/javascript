import { css } from '@emotion/css';

export const direction = {
  column: css({
    flexDirection: 'column',
  }),
  row: css({
    flexDirection: 'row',
  }),
};

export const grow = (flexGrow: number) => css({ flexGrow });

export const shrink = (flexShrink: number) => css({ flexShrink });
