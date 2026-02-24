import { type ComponentProps, splitProps } from 'solid-js';

import { classNames } from '@terenceodonoghue/utils';

import styles from './Card.module.css';

export const Card = (props: ComponentProps<'section'>) => {
  const [local, rest] = splitProps(props, ['class']);
  return <section class={classNames(styles.card, local.class)} {...rest} />;
};

export const CardHeader = (props: ComponentProps<'header'>) => {
  return <header class={styles.header} {...props} />;
};

export const CardFooter = (props: ComponentProps<'footer'>) => {
  return <footer class={styles.footer} {...props} />;
};
