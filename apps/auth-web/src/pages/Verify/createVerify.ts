import { useNavigate } from '@solidjs/router';
import { createSignal } from 'solid-js';

import { fromBase64url, toBase64url } from '@terenceodonoghue/utils';

import { registerFinish, registerVerify } from '../../api/auth';
import { withRedirect } from '../../lib/redirect';
import { registrationEmail } from '../../store/registration';

export const createVerify = () => {
  const navigate = useNavigate();
  const [code, setCode] = createSignal('');
  const [loading, setLoading] = createSignal(false);

  const handleSubmit = async (e: SubmitEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const options = await registerVerify(registrationEmail(), code());

      // Decode base64url fields to ArrayBuffer for the browser API
      const decodedOptions: CredentialCreationOptions = {
        publicKey: {
          ...options.publicKey,
          challenge: fromBase64url(options.publicKey.challenge),
          user: {
            ...options.publicKey.user,
            id: fromBase64url(options.publicKey.user.id),
          },
          excludeCredentials: options.publicKey.excludeCredentials?.map(
            (c) => ({ ...c, id: fromBase64url(c.id) }),
          ),
        },
      };

      const raw = await navigator.credentials.create(decodedOptions);
      if (!raw) throw new Error('No credential created');

      const cred = raw as PublicKeyCredential;
      const resp = cred.response as AuthenticatorAttestationResponse;

      await registerFinish({
        id: cred.id,
        rawId: toBase64url(cred.rawId),
        type: cred.type,
        response: {
          attestationObject: toBase64url(resp.attestationObject),
          clientDataJSON: toBase64url(resp.clientDataJSON),
          transports: resp.getTransports?.() ?? [],
        },
      });

      navigate(withRedirect('/success'));
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Verification failed');
    } finally {
      setLoading(false);
    }
  };

  return { code, setCode, loading, handleSubmit } as const;
};
