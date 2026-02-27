import { type ComponentProps, splitProps } from 'solid-js';

import styles from './Page.module.css';

export const Page = (props: ComponentProps<'main'>) => {
  return <main class={styles.page} {...props} />;
};

export const PageHeader = (props: ComponentProps<'header'>) => {
  const [local, rest] = splitProps(props, ['children']);
  return (
    <header class={styles.header} {...rest}>
      <div class={styles.headerContainer}>{local.children}</div>
    </header>
  );
};

export const PageContent = (props: ComponentProps<'main'>) => {
  const [local, rest] = splitProps(props, ['children']);
  return (
    <main class={styles.content} {...rest}>
      <div class={styles.contentContainer}>{local.children}</div>
    </main>
  );
};
