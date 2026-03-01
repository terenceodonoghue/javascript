import { type ComponentProps, splitProps } from 'solid-js';

import { classNames } from '@terenceodonoghue/utils';

import styles from './css/Button.module.css';

export const Button = (
  props: ComponentProps<'button'> & { size: 'sm' | 'lg' },
) => {
  const [local, rest] = splitProps(props, ['size']);
  return (
    <button class={classNames(styles.button, styles[local.size])} {...rest} />
  );
};
