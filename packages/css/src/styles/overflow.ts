import { css } from '@emotion/css';

export const hidden = css({
  overflow: 'hidden',
});

export const scroll = css({
  overflow: 'scroll',
});

export const x = {
  hidden: css({
    overflowX: 'hidden',
  }),

  scroll: css({
    overflowX: 'scroll',
  }),
};

export const y = {
  hidden: css({
    overflowY: 'hidden',
  }),

  scroll: css({
    overflowY: 'scroll',
  }),
};
