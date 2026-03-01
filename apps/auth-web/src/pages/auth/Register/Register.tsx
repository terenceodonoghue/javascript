import { Back } from '../../../components/Back';
import { Button } from '../../../components/Button';
import { TextInput } from '../../../components/TextInput';
import { Card, Header, Title } from '../components/Card';
import { Page } from '../components/Page';
import { createRegister } from './createRegister';
import styles from './Register.module.css';

export const Register = () => {
  const { name, setName, loading, handleSubmit } = createRegister();

  return (
    <Page>
      <Card>
        <Back onClick={() => history.back()} />
        <Header>
          <Title>Create a passkey</Title>
          <p>What should we call it?</p>
        </Header>
        <form class={styles.form} onSubmit={handleSubmit}>
          <TextInput
            id="name"
            type="text"
            placeholder="e.g. iCloud Keychain"
            value={name()}
            onInput={(e) => setName(e.currentTarget.value)}
            autocomplete="off"
            required
          />
          <Button size="lg" type="submit" disabled={loading() || !name()}>
            {loading() ? 'Creating passkey...' : 'Create passkey'}
          </Button>
        </form>
      </Card>
    </Page>
  );
};
