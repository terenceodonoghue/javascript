import { Definition } from '../types.js';

export type Time = 'ms' | 's' | 'min' | 'h';

const definitions: Record<Time, Definition> = {
  ms: {
    label: 'millisecond',
    ratio: 0.001,
  },
  s: {
    label: 'second',
    ratio: 1,
  },
  min: {
    label: 'minute',
    ratio: 60,
  },
  h: {
    label: 'hour',
    ratio: 3600,
  },
};

export default definitions;
