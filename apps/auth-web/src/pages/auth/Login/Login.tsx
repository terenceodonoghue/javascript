import { FingerprintPattern } from 'lucide-solid';

import { Button } from '../../../components/Form/Form';
import { Body, Link } from '../../../components/Text/Text';
import { loginSubtitle } from '../../../lib/messages';
import { Card, Footer, Header } from '../components/Card';
import { Page } from '../components/Page';
import { createLogin } from './createLogin';
import styles from './Login.module.css';

export const Login = () => {
  const { loading, handleLogin } = createLogin();
  const subtitle = loginSubtitle();

  return (
    <Page>
      <Card class={styles.login}>
        <Header>
          <h1 class={styles.title}>{import.meta.env.VITE_APP_TITLE}</h1>
          <Body>{subtitle}</Body>
        </Header>
        <Button type="button" onClick={handleLogin} disabled={loading()}>
          <FingerprintPattern size={20} />
          {loading() ? 'Verifying human...' : 'Sign in with passkey'}
        </Button>
        <Footer>
          <Link href="/register">Create a passkey</Link>
        </Footer>
      </Card>
    </Page>
  );
};
