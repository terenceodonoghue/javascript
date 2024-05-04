import { injectGlobal } from '@emotion/css';

injectGlobal({
  '*, *:before, *:after': {
    boxSizing: 'border-box',
  },
  ':root': {
    fontFamily: 'system-ui, sans-serif',
    fontSynthesis: 'none',
    textRendering: 'optimizeLegibility',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
  },
});
