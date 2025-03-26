import { Theme } from '../types.js';

const minimal: Theme = {
  border: {
    radius: {
      rounded: '50%',
      squared: '0.375rem',
    },
  },
  color: {
    neutral: {
      surface: {
        backdrop: '#f8f8f8',
        elevated: '#ffffff',
      },
    },
  },
  font: {
    family: 'system-ui',
  },
};

export default minimal;
