import { A, type AnchorProps } from '@solidjs/router';
import type { ComponentProps } from 'solid-js';

import styles from './Text.module.css';

export const Title = (props: ComponentProps<'h1'>) => {
  return <h1 class={styles.title} {...props} />;
};

export const Heading = (props: ComponentProps<'h1'>) => {
  return <h1 class={styles.heading} {...props} />;
};

export const Body = (props: ComponentProps<'p'>) => {
  return <p class={styles.body} {...props} />;
};

export const Link = (props: AnchorProps) => {
  return <A class={styles.link} {...props} />;
};
