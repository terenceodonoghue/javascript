import { injectGlobal } from '@emotion/css';

injectGlobal({
  ':root': {
    fontFamily: 'system-ui, sans-serif',
    fontSynthesis: 'none',
    textRendering: 'optimizeLegibility',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
  },
});
