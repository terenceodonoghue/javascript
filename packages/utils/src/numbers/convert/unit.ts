import energy, { Energy } from './definitions/energy.js';
import length, { Length } from './definitions/length.js';
import power, { Power } from './definitions/power.js';
import time, { Time } from './definitions/time.js';
import { Conversion, Options, Unit } from './types.js';

function unit(value: number, from: Energy, opts?: Options<Energy>): Conversion;
function unit(value: number, from: Length, opts?: Options<Length>): Conversion;
function unit(value: number, from: Power, opts?: Options<Power>): Conversion;
function unit(value: number, from: Time, opts?: Options<Time>): Conversion;
function unit(
  value: number,
  from: Unit,
  { compact = true, precision, to = from }: Options<Unit> = {},
): Conversion {
  const definition = { ...energy, ...length, ...power, ...time };
  const conversion = (value * definition[from].ratio) / definition[to].ratio;

  const locales: Intl.LocalesArgument = 'en-AU';
  const options: Intl.NumberFormatOptions = {
    maximumFractionDigits: precision || (Number.isInteger(conversion) ? 0 : 2),
    minimumFractionDigits: 0,
  };

  return {
    get label() {
      try {
        return conversion.toLocaleString(locales, {
          style: 'unit',
          unit: definition[to].label,
          unitDisplay: compact ? 'short' : 'long',
          ...options,
        });
      } catch {
        return conversion
          .toLocaleString(locales, options)
          .concat(
            ' ',
            compact ? to : definition[to].label,
            !compact && conversion !== 1 ? 's' : '',
          );
      }
    },
    value: precision
      ? Number.parseFloat(
          conversion.toLocaleString(locales, {
            useGrouping: false,
            ...options,
          }),
        )
      : conversion,
  };
}

export default unit;
