import { css } from '@emotion/css';

import { height, width } from '../sizing.js';

export const dashboard = {
  grid: css([
    {
      gridTemplateAreas: `
      "header header"
      "nav main"
    `,
      gridTemplateColumns: 'minmax(200px, auto) 1fr',
      gridTemplateRows: 'min-content',
    },
    height.screen,
    width.screen,
  ]),
  header: css({
    gridArea: 'header',
  }),
  main: css({
    gridArea: 'main',
  }),
  nav: css({
    gridArea: 'nav',
  }),
};
