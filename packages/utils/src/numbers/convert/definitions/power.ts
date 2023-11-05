import { Definition } from '../types.js';

export type Power = 'W' | 'kW' | 'MW';

const definitions: Record<Power, Definition> = {
  W: {
    label: 'watt',
    ratio: 1,
  },
  kW: {
    label: 'kilowatt',
    ratio: 1000,
  },
  MW: {
    label: 'megawatt',
    ratio: 1000000,
  },
};

export default definitions;
