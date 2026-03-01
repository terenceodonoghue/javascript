import { type ComponentProps, splitProps } from 'solid-js';

import styles from './css/Page.module.css';

export const heading = styles.heading;

export const Page = (props: ComponentProps<'div'>) => {
  return <div class={styles.page} {...props} />;
};

export const Main = (props: ComponentProps<'main'>) => {
  const [local, rest] = splitProps(props, ['children']);
  return (
    <main class={styles.main} {...rest}>
      <div class={styles.layout}>{local.children}</div>
    </main>
  );
};

export const Header = (props: ComponentProps<'header'>) => {
  const [local, rest] = splitProps(props, ['children']);
  return (
    <header class={styles.header} {...rest}>
      <div class={styles.layout}>{local.children}</div>
    </header>
  );
};
