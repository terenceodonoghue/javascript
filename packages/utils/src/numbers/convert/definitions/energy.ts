import { Definition } from '../types.js';

export type Energy = 'Wh' | 'kWh' | 'MWh';

const definitions: Record<Energy, Definition> = {
  Wh: {
    label: 'watt-hour',
    ratio: 1,
  },
  kWh: {
    label: 'kilowatt-hour',
    ratio: 1000,
  },
  MWh: {
    label: 'megawatt-hour',
    ratio: 1000000,
  },
};

export default definitions;
