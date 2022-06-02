import conversions from './conversions';
import type { Converter, Energy, Length, Unit } from './types';

export function convert(energy: number, from: Energy): Converter<Energy>;

export function convert(length: number, from: Length): Converter<Length>;

export function convert(value: number, from: Unit): Converter<Unit> {
  return {
    to: (to: Unit, precision?: number) => {
      const conversion =
        (value * conversions[from].ratio) / conversions[to].ratio;

      if (Number.isInteger(precision)) {
        const formatter = new Intl.NumberFormat('en-AU', {
          minimumFractionDigits: precision,
          maximumFractionDigits: precision,
          useGrouping: false,
        });

        return Number.parseFloat(formatter.format(conversion));
      }

      return conversion;
    },
  };
}
