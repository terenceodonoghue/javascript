import { ArrowLeft } from 'lucide-solid';
import type { ComponentProps } from 'solid-js';

import styles from './Form.module.css';

export const Back = (props: ComponentProps<'button'>) => {
  return (
    <button type="button" class={styles.back} {...props}>
      <ArrowLeft size={16} />
      Back
    </button>
  );
};

export const Button = (props: ComponentProps<'button'>) => {
  return <button class={styles.button} {...props} />;
};

export const TextInput = (props: ComponentProps<'input'>) => {
  return <input class={styles.input} {...props} />;
};
