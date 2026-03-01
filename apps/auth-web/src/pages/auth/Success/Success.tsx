import { CircleCheck } from 'lucide-solid';

import { Card, Title } from '../components/Card';
import { Page } from '../components/Page';
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
        <Title>Access granted</Title>
        <p>Beaming you in...</p>
      </Card>
    </Page>
  );
};
