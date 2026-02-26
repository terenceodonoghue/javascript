import { Card, CardHeader } from '../../components/Card/Card';
import { Back, Button, Form, TextInput } from '../../components/Form/Form';
import { Page } from '../../components/Page/Page';
import { Body, Heading } from '../../components/Text/Text';
import { createRegister } from './createRegister';

export const Register = () => {
  const { name, setName, loading, handleSubmit } = createRegister();

  return (
    <Page>
      <Card>
        <Back onClick={() => history.back()} />
        <CardHeader>
          <Heading>Create a passkey</Heading>
          <Body>What should we call it?</Body>
        </CardHeader>
        <Form onSubmit={handleSubmit}>
          <TextInput
            id="name"
            type="text"
            placeholder="e.g. iCloud Keychain"
            value={name()}
            onInput={(e) => setName(e.currentTarget.value)}
            autocomplete="off"
            required
          />
          <Button type="submit" disabled={loading() || !name()}>
            {loading() ? 'Creating passkey...' : 'Create passkey'}
          </Button>
        </Form>
      </Card>
    </Page>
  );
};
