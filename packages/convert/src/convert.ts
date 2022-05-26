import conversions from './conversions';
import type { Converter, Energy, Length, Unit } from './types';

export function convert(energy: number, from: Energy): Converter<Energy>;

export function convert(length: number, from: Length): Converter<Length>;

export function convert(value: number, from: Unit): Converter<Unit> {
  return {
    to: (to: Unit) => (value * conversions[from].ratio) / conversions[to].ratio,
  };
}
