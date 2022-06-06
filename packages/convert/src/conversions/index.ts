import * as energy from './energy';
import * as power from './power';
import type { Conversion, Unit } from '../types';

export default {
  ...energy,
  ...power,
} as {
  [key in Unit]: Conversion;
};
