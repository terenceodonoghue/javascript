import { ArrowLeft } from 'lucide-solid';
import type { ComponentProps } from 'solid-js';

import styles from './css/Back.module.css';

export const Back = (props: ComponentProps<'button'>) => {
  return (
    <button type="button" class={styles.back} {...props}>
      <ArrowLeft size={16} />
      Back
    </button>
  );
};
