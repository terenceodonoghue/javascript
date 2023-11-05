import { Definition } from '../types.js';

export type Length = 'mm' | 'cm' | 'm' | 'km';

const definitions: Record<Length, Definition> = {
  mm: {
    label: 'millimeter',
    ratio: 0.001,
  },
  cm: {
    label: 'centimeter',
    ratio: 0.01,
  },
  m: {
    label: 'meter',
    ratio: 1,
  },
  km: {
    label: 'kilometer',
    ratio: 1000,
  },
};

export default definitions;
