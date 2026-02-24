import { Card, CardHeader } from '../../components/Card/Card';
import { Back, Button, Form } from '../../components/Form/Form';
import { OtpInput } from '../../components/OtpInput/OtpInput';
import { Page } from '../../components/Page/Page';
import { Body, Heading } from '../../components/Text/Text';
import { registrationEmail } from '../../store/registration';
import { createVerify } from './createVerify';
import styles from './Verify.module.css';

export const Verify = () => {
  const { code, setCode, loading, handleSubmit } = createVerify();
  let formRef!: HTMLFormElement;

  return (
    <Page>
      <Card>
        <Back onClick={() => history.back()} />
        <CardHeader>
          <Heading>Verify your email</Heading>
          <Body>
            Enter the 6-digit code sent to{' '}
            <span class={styles.email}>{registrationEmail()}</span>
          </Body>
        </CardHeader>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <OtpInput
            value={code()}
            onInput={setCode}
            onComplete={() => formRef.requestSubmit()}
          />
          <Button type="submit" disabled={loading() || code().length !== 6}>
            {loading() ? 'Verifying...' : 'Verify'}
          </Button>
        </Form>
      </Card>
    </Page>
  );
};
