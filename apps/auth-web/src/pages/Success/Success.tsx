import { CircleCheck } from 'lucide-solid';

import { Card } from '../../components/Card/Card';
import { Page } from '../../components/Page/Page';
import { Body, Heading } from '../../components/Text/Text';
import { createSuccess } from './createSuccess';
import styles from './Success.module.css';

export const Success = () => {
  createSuccess();

  return (
    <Page>
      <Card class={`${styles.success} ${styles.redirecting}`}>
        <div class={styles.icon}>
          <CircleCheck size="1.75rem" />
        </div>
        <Heading>Access granted</Heading>
        <Body>Beaming you in...</Body>
      </Card>
    </Page>
  );
};
