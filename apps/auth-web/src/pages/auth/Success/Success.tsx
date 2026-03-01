import { CircleCheck } from 'lucide-solid';

import { Body } from '../../../components/Text/Text';
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
        <Body>Beaming you in...</Body>
      </Card>
    </Page>
  );
};
