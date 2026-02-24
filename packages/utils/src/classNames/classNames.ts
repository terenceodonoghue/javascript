type ClassName = string | false | undefined | ClassName[];

export const classNames = (...args: ClassName[]) =>
  args.flat().filter(Boolean).join(' ');
