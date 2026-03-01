import { type ComponentProps, splitProps } from 'solid-js';

import { classNames } from '@terenceodonoghue/utils';

import styles from './css/Card.module.css';

export const Card = (props: ComponentProps<'section'>) => {
  const [local, rest] = splitProps(props, ['class']);
  return <section class={classNames(styles.card, local.class)} {...rest} />;
};

export const Header = (props: ComponentProps<'header'>) => {
  return <header class={styles.header} {...props} />;
};

export const Footer = (props: ComponentProps<'footer'>) => {
  return <footer class={styles.footer} {...props} />;
};

export const Title = (props: ComponentProps<'h1'>) => {
  return <h1 class={styles.title} {...props} />;
};
