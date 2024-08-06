import { css } from '@emotion/css';

import { alignItems } from '../boxAlignment.js';
import { overflowY } from '../layout.js';
import { height, width } from '../sizing.js';

export const dashboard = {
  grid: css([
    {
      gridTemplateAreas: `
        "header header"
        "nav main"
    `,
      gridTemplateColumns: 'auto 1fr',
      gridTemplateRows: 'auto 1fr',
    },
    height.screen,
    width.screen,
  ]),
  header: css([
    {
      gridArea: 'header',
    },
    alignItems.center,
  ]),
  main: css([
    {
      gridArea: 'main',
    },
    overflowY.scroll,
  ]),
  nav: css([
    {
      gridArea: 'nav',
    },
    overflowY.scroll,
  ]),
};
