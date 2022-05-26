export type Converter<T> = {
  to: (unit: T) => number;
};

export type Conversion = {
  ratio: number;
};

export type Energy = 'J' | 'Wh' | 'kWh' | 'MWh';

export type Length = 'cm' | 'm' | 'km';

export type Unit = Energy | Length;
