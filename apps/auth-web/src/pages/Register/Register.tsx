import { Card, CardHeader } from '../../components/Card/Card';
import { Back, Button, Form, TextInput } from '../../components/Form/Form';
import { Page } from '../../components/Page/Page';
import { Body, Heading } from '../../components/Text/Text';
import { createRegister } from './createRegister';

export const Register = () => {
  const { email, setEmail, loading, handleSubmit } = createRegister();

  return (
    <Page>
      <Card>
        <Back onClick={() => history.back()} />
        <CardHeader>
          <Heading>Create an account</Heading>
          <Body>Enter your email to get started</Body>
        </CardHeader>
        <Form onSubmit={handleSubmit}>
          <TextInput
            id="email"
            type="email"
            placeholder="you@example.com"
            value={email()}
            onInput={(e) => setEmail(e.currentTarget.value)}
            autocomplete="email"
            required
          />
          <Button type="submit" disabled={loading() || !email()}>
            {loading() ? 'Sending code...' : 'Continue'}
          </Button>
        </Form>
      </Card>
    </Page>
  );
};
