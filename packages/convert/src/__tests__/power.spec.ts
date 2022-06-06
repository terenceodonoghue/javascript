import { convert } from '../convert';

test('W to W', () => {
  expect(convert(1, 'W').to('W')).toBe(1);
});

test('W to kW', () => {
  expect(convert(1, 'W').to('kW')).toBe(0.001);
});

test('W to MW', () => {
  expect(convert(1, 'W').to('MW')).toBe(0.000001);
});

test('kW to W', () => {
  expect(convert(1, 'kW').to('W')).toBe(1000);
});

test('kW to kW', () => {
  expect(convert(1, 'kW').to('kW')).toBe(1);
});

test('kW to MW', () => {
  expect(convert(1, 'kW').to('MW')).toBe(0.001);
});

test('MW to W', () => {
  expect(convert(1, 'MW').to('W')).toBe(1000000);
});

test('MW to kW', () => {
  expect(convert(1, 'MW').to('kW')).toBe(1000);
});

test('MW to MW', () => {
  expect(convert(1, 'MW').to('MW')).toBe(1);
});
