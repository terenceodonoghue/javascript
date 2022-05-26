import { convert } from '../convert';

test('Wh to Wh', () => {
  expect(convert(1, 'Wh').to('Wh')).toBe(1);
});

test('Wh to kWh', () => {
  expect(convert(1, 'Wh').to('kWh')).toBe(0.001);
});

test('Wh to MWh', () => {
  expect(convert(1, 'Wh').to('MWh')).toBe(0.000001);
});

test('kWh to Wh', () => {
  expect(convert(1, 'kWh').to('Wh')).toBe(1000);
});

test('kWh to kWh', () => {
  expect(convert(1, 'kWh').to('kWh')).toBe(1);
});

test('kWh to MWh', () => {
  expect(convert(1, 'kWh').to('MWh')).toBe(0.001);
});

test('MWh to Wh', () => {
  expect(convert(1, 'MWh').to('Wh')).toBe(1000000);
});

test('MWh to kWh', () => {
  expect(convert(1, 'MWh').to('kWh')).toBe(1000);
});

test('MWh to MWh', () => {
  expect(convert(1, 'MWh').to('MWh')).toBe(1);
});
