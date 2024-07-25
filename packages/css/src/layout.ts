import { css } from '@emotion/css';

/**
 * Display
 */

export const display = {
  block: css({
    display: 'block',
  }),
  flex: css({
    display: 'flex',
  }),
  grid: css({
    display: 'grid',
  }),
  hidden: css({
    display: 'none',
  }),
};

/**
 * Overflow
 */

export const overflow = {
  hidden: css({
    overflow: 'hidden',
  }),
  scroll: css({
    overflow: 'scroll',
  }),
};

export const overflowX = {
  hidden: css({
    overflowX: 'hidden',
  }),
  scroll: css({
    overflowX: 'scroll',
  }),
};

export const overflowY = {
  hidden: css({
    overflowY: 'hidden',
  }),
  scroll: css({
    overflowY: 'scroll',
  }),
};

/**
 * Position
 */

export const position = {
  absolute: css({
    position: 'absolute',
  }),
  fixed: css({
    position: 'fixed',
  }),
  relative: css({
    position: 'relative',
  }),
  sticky: css({
    position: 'sticky',
  }),
};

/**
 * Flexbox & Grid
 */

export const flexDirection = {
  column: css({
    flexDirection: 'column',
  }),
  row: css({
    flexDirection: 'row',
  }),
};

export const flexGrow = {
  1: css({
    flexGrow: 1,
  }),
};

export const flexShrink = {
  0: css({
    flexShrink: 0,
  }),
};

export const alignContent = {
  center: css({
    alignContent: 'center',
  }),
  end: css({
    alignContent: 'end',
  }),
  start: css({
    alignContent: 'start',
  }),
};

export const alignItems = {
  center: css({
    alignItems: 'center',
  }),
  end: css({
    alignItems: 'end',
  }),
  start: css({
    alignItems: 'start',
  }),
};

export const justifyContent = {
  center: css({
    justifyContent: 'center',
  }),
  end: css({
    justifyContent: 'end',
  }),
  start: css({
    justifyContent: 'start',
  }),
};

export const justifyItems = {
  center: css({
    justifyItems: 'center',
  }),
  end: css({
    justifyItems: 'end',
  }),
  start: css({
    justifyItems: 'start',
  }),
};
