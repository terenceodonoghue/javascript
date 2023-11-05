import { describe, expect, test } from 'vitest';

import unit from '../unit.js';

describe('unit', () => {
  describe('energy', () => {
    test('label', () => {
      expect(unit(1, 'Wh').label).toBe('1 Wh');
      expect(unit(1, 'Wh', { compact: false }).label).toBe('1 watt-hour');
      expect(unit(1.2345, 'Wh').label).toBe('1.23 Wh');
      expect(unit(1.2345, 'Wh', { compact: false }).label).toBe(
        '1.23 watt-hours',
      );

      expect(unit(1, 'kWh').label).toBe('1 kWh');
      expect(unit(1, 'kWh', { compact: false }).label).toBe('1 kilowatt-hour');
      expect(unit(1.2345, 'kWh').label).toBe('1.23 kWh');
      expect(unit(1.2345, 'kWh', { compact: false }).label).toBe(
        '1.23 kilowatt-hours',
      );

      expect(unit(1, 'MWh').label).toBe('1 MWh');
      expect(unit(1, 'MWh', { compact: false }).label).toBe('1 megawatt-hour');
      expect(unit(1.2345, 'MWh').label).toBe('1.23 MWh');
      expect(unit(1.2345, 'MWh', { compact: false }).label).toBe(
        '1.23 megawatt-hours',
      );
    });

    test('value', () => {
      expect(unit(1, 'Wh', { to: 'Wh' }).value).toBe(1);
      expect(unit(1, 'Wh', { to: 'kWh' }).value).toBe(0.001);
      expect(unit(1, 'Wh', { to: 'MWh' }).value).toBe(0.000001);

      expect(unit(1, 'kWh', { to: 'Wh' }).value).toBe(1000);
      expect(unit(1, 'kWh', { to: 'kWh' }).value).toBe(1);
      expect(unit(1, 'kWh', { to: 'MWh' }).value).toBe(0.001);

      expect(unit(1, 'MWh', { to: 'Wh' }).value).toBe(1000000);
      expect(unit(1, 'MWh', { to: 'kWh' }).value).toBe(1000);
      expect(unit(1, 'MWh', { to: 'MWh' }).value).toBe(1);
    });
  });

  describe('length', () => {
    test('label', () => {
      expect(unit(1, 'mm').label).toBe('1 mm');
      expect(unit(1, 'mm', { compact: false }).label).toBe('1 millimetre');
      expect(unit(1.2345, 'mm').label).toBe('1.23 mm');
      expect(unit(1.2345, 'mm', { compact: false }).label).toBe(
        '1.23 millimetres',
      );

      expect(unit(1, 'cm').label).toBe('1 cm');
      expect(unit(1, 'cm', { compact: false }).label).toBe('1 centimetre');
      expect(unit(1.2345, 'cm').label).toBe('1.23 cm');
      expect(unit(1.2345, 'cm', { compact: false }).label).toBe(
        '1.23 centimetres',
      );

      expect(unit(1, 'm').label).toBe('1 m');
      expect(unit(1, 'm', { compact: false }).label).toBe('1 metre');
      expect(unit(1.2345, 'm').label).toBe('1.23 m');
      expect(unit(1.2345, 'm', { compact: false }).label).toBe('1.23 metres');

      expect(unit(1, 'km').label).toBe('1 km');
      expect(unit(1, 'km', { compact: false }).label).toBe('1 kilometre');
      expect(unit(1.2345, 'km').label).toBe('1.23 km');
      expect(unit(1.2345, 'km', { compact: false }).label).toBe(
        '1.23 kilometres',
      );
    });

    test('value', () => {
      expect(unit(1, 'mm', { to: 'mm' }).value).toBe(1);
      expect(unit(1, 'mm', { to: 'cm' }).value).toBe(0.1);
      expect(unit(1, 'mm', { to: 'm' }).value).toBe(0.001);
      expect(unit(1, 'mm', { to: 'km' }).value).toBe(0.000001);

      expect(unit(1, 'cm', { to: 'mm' }).value).toBe(10);
      expect(unit(1, 'cm', { to: 'cm' }).value).toBe(1);
      expect(unit(1, 'cm', { to: 'm' }).value).toBe(0.01);
      expect(unit(1, 'cm', { to: 'km' }).value).toBe(0.00001);

      expect(unit(1, 'm', { to: 'mm' }).value).toBe(1000);
      expect(unit(1, 'm', { to: 'cm' }).value).toBe(100);
      expect(unit(1, 'm', { to: 'm' }).value).toBe(1);
      expect(unit(1, 'm', { to: 'km' }).value).toBe(0.001);

      expect(unit(1, 'km', { to: 'mm' }).value).toBe(1000000);
      expect(unit(1, 'km', { to: 'cm' }).value).toBe(100000);
      expect(unit(1, 'km', { to: 'm' }).value).toBe(1000);
      expect(unit(1, 'km', { to: 'km' }).value).toBe(1);
    });
  });

  describe('power', () => {
    test('label', () => {
      expect(unit(1, 'W').label).toBe('1 W');
      expect(unit(1, 'W', { compact: false }).label).toBe('1 watt');
      expect(unit(1.2345, 'W').label).toBe('1.23 W');
      expect(unit(1.2345, 'W', { compact: false }).label).toBe('1.23 watts');

      expect(unit(1, 'kW').label).toBe('1 kW');
      expect(unit(1, 'kW', { compact: false }).label).toBe('1 kilowatt');
      expect(unit(1.2345, 'kW').label).toBe('1.23 kW');
      expect(unit(1.2345, 'kW', { compact: false }).label).toBe(
        '1.23 kilowatts',
      );

      expect(unit(1, 'MW').label).toBe('1 MW');
      expect(unit(1, 'MW', { compact: false }).label).toBe('1 megawatt');
      expect(unit(1.2345, 'MW').label).toBe('1.23 MW');
      expect(unit(1.2345, 'MW', { compact: false }).label).toBe(
        '1.23 megawatts',
      );
    });

    test('value', () => {
      expect(unit(1, 'W', { to: 'W' }).value).toBe(1);
      expect(unit(1, 'W', { to: 'kW' }).value).toBe(0.001);
      expect(unit(1, 'W', { to: 'MW' }).value).toBe(0.000001);

      expect(unit(1, 'kW', { to: 'W' }).value).toBe(1000);
      expect(unit(1, 'kW', { to: 'kW' }).value).toBe(1);
      expect(unit(1, 'kW', { to: 'MW' }).value).toBe(0.001);

      expect(unit(1, 'MW', { to: 'W' }).value).toBe(1000000);
      expect(unit(1, 'MW', { to: 'kW' }).value).toBe(1000);
      expect(unit(1, 'MW', { to: 'MW' }).value).toBe(1);
    });
  });

  describe('time', () => {
    test('label', () => {
      expect(unit(1, 'ms').label).toBe('1 ms');
      expect(unit(1, 'ms', { compact: false }).label).toBe('1 millisecond');
      expect(unit(1.2345, 'ms').label).toBe('1.23 ms');
      expect(unit(1.2345, 'ms', { compact: false }).label).toBe(
        '1.23 milliseconds',
      );

      expect(unit(1, 's').label).toBe('1 sec.');
      expect(unit(1, 's', { compact: false }).label).toBe('1 second');
      expect(unit(1.2345, 's').label).toBe('1.23 secs');
      expect(unit(1.2345, 's', { compact: false }).label).toBe('1.23 seconds');

      expect(unit(1, 'min').label).toBe('1 min.');
      expect(unit(1, 'min', { compact: false }).label).toBe('1 minute');
      expect(unit(1.2345, 'min').label).toBe('1.23 mins');
      expect(unit(1.2345, 'min', { compact: false }).label).toBe(
        '1.23 minutes',
      );

      expect(unit(1, 'h').label).toBe('1 hr');
      expect(unit(1, 'h', { compact: false }).label).toBe('1 hour');
      expect(unit(1.2345, 'h').label).toBe('1.23 hrs');
      expect(unit(1.2345, 'h', { compact: false }).label).toBe('1.23 hours');
    });

    test('value', () => {
      expect(unit(1, 'ms', { to: 'ms' }).value).toBe(1);
      expect(unit(1, 'ms', { to: 's' }).value).toBe(0.001);
      expect(unit(1, 'ms', { to: 'min' }).value).toBe(1.6666666666666667e-5);
      expect(unit(1, 'ms', { to: 'h' }).value).toBe(2.7777777777777776e-7);

      expect(unit(1, 's', { to: 'ms' }).value).toBe(1000);
      expect(unit(1, 's', { to: 's' }).value).toBe(1);
      expect(unit(1, 's', { to: 'min' }).value).toBe(0.016666666666666666);
      expect(unit(1, 's', { to: 'h' }).value).toBe(0.0002777777777777778);

      expect(unit(1, 'min', { to: 'ms' }).value).toBe(60000);
      expect(unit(1, 'min', { to: 's' }).value).toBe(60);
      expect(unit(1, 'min', { to: 'min' }).value).toBe(1);
      expect(unit(1, 'min', { to: 'h' }).value).toBe(0.016666666666666666);

      expect(unit(1, 'h', { to: 'ms' }).value).toBe(3600000);
      expect(unit(1, 'h', { to: 's' }).value).toBe(3600);
      expect(unit(1, 'h', { to: 'min' }).value).toBe(60);
      expect(unit(1, 'h', { to: 'h' }).value).toBe(1);
    });
  });
});
