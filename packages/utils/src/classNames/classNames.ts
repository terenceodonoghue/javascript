type ClassName = string | ClassName[];

export const classNames = (...args: ClassName[]) =>
  args.flat().filter(Boolean).join(' ');
