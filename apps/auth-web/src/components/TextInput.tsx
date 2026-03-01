import type { ComponentProps } from 'solid-js';

import styles from './css/TextInput.module.css';

export const TextInput = (props: ComponentProps<'input'>) => {
  return <input class={styles.input} {...props} />;
};
