import { A, type AnchorProps } from '@solidjs/router';

import styles from './css/Link.module.css';

export const Link = (props: AnchorProps) => {
  return <A class={styles.link} {...props} />;
};
