import { Energy } from './definitions/energy.js';
import { Length } from './definitions/length.js';
import { Power } from './definitions/power.js';
import { Time } from './definitions/time.js';

export interface Conversion {
  label: string;
  value: number;
}

export interface Definition {
  label: string;
  ratio: number;
}

export interface Options<T> {
  to?: T;
  compact?: boolean;
  precision?: number;
}

export type Unit = Energy | Length | Power | Time;
