import { CircleCheck } from 'lucide-solid';

import { classNames } from '@terenceodonoghue/utils';

import { Card, CardHeader } from '../../components/Card/Card';
import { Page } from '../../components/Page/Page';
import { Body, Heading } from '../../components/Text/Text';
import { createSuccess } from './createSuccess';
import styles from './Success.module.css';

export const Success = () => {
  const { redirecting } = createSuccess();

  return (
    <Page>
      <Card
        class={classNames(styles.success, redirecting() && styles.redirecting)}
      >
        <div class={styles.icon}>
          <CircleCheck size="1.75rem" />
        </div>
        <Heading>Access granted</Heading>
        <Body>
          {redirecting()
            ? 'Beaming you in...'
            : 'Your passkey has been created successfully.'}
        </Body>
      </Card>
    </Page>
  );
};
