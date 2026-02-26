import { FingerprintPattern } from 'lucide-solid';
import { createResource } from 'solid-js';

import { getNetworkContext } from '../../api/auth';
import { Card, CardFooter, CardHeader } from '../../components/Card/Card';
import { Button } from '../../components/Form/Form';
import { Page } from '../../components/Page/Page';
import { Body, Link, Title } from '../../components/Text/Text';
import { loginSubtitle } from '../../lib/messages';
import { withRedirect } from '../../lib/redirect';
import { createLogin } from './createLogin';
import styles from './Login.module.css';

export const Login = () => {
  const { loading, handleLogin } = createLogin();
  const subtitle = loginSubtitle();
  const [context] = createResource(getNetworkContext);

  return (
    <Page>
      <Card class={styles.login}>
        <CardHeader>
          <Title>{import.meta.env.VITE_APP_TITLE}</Title>
          <Body>{subtitle}</Body>
        </CardHeader>
        <Button type="button" onClick={handleLogin} disabled={loading()}>
          <FingerprintPattern size={20} />
          {loading() ? 'Verifying human...' : 'Sign in with passkey'}
        </Button>
        {context()?.network === 'local' && (
          <CardFooter>
            <Link href={withRedirect('/register')}>Create a passkey</Link>
          </CardFooter>
        )}
      </Card>
    </Page>
  );
};
