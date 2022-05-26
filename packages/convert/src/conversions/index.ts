import * as energy from './energy';
import type { Conversion, Unit } from '../types';

export default {
  ...energy,
} as {
  [key in Unit]: Conversion;
};
