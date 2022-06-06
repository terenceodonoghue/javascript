export type Converter<T> = {
  to: (unit: T, precision?: number) => number;
};

export type Conversion = {
  ratio: number;
};

export type Energy = 'J' | 'Wh' | 'kWh' | 'MWh';

export type Length = 'cm' | 'm' | 'km';

export type Power = 'W' | 'kW' | 'MW';

export type Unit = Energy | Length | Power;
