import { type ComponentProps } from 'solid-js';

import styles from './css/Page.module.css';

export const Page = (props: ComponentProps<'main'>) => {
  return <main class={styles.page} {...props} />;
};
