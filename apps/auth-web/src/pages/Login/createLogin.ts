import { useNavigate } from '@solidjs/router';
import { createSignal } from 'solid-js';

import { fromBase64url, toBase64url } from '@terenceodonoghue/utils';

import { loginBegin, loginFinish } from '../../api/auth';
import { withRedirect } from '../../lib/redirect';

export const createLogin = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = createSignal(false);

  const handleLogin = async () => {
    setLoading(true);
    try {
      const options = await loginBegin();

      // Decode base64url fields to ArrayBuffer for the browser API
      const decodedOptions: CredentialRequestOptions = {
        publicKey: {
          ...options.publicKey,
          challenge: fromBase64url(options.publicKey.challenge),
          allowCredentials: options.publicKey.allowCredentials?.map((c) => ({
            ...c,
            id: fromBase64url(c.id),
          })),
        },
      };

      const raw = await navigator.credentials.get(decodedOptions);
      if (!raw) throw new Error('No credential returned');

      const cred = raw as PublicKeyCredential;
      const resp = cred.response as AuthenticatorAssertionResponse;

      await loginFinish({
        id: cred.id,
        rawId: toBase64url(cred.rawId),
        type: cred.type,
        response: {
          authenticatorData: toBase64url(resp.authenticatorData),
          clientDataJSON: toBase64url(resp.clientDataJSON),
          signature: toBase64url(resp.signature),
          userHandle: resp.userHandle ? toBase64url(resp.userHandle) : null,
        },
      });

      navigate(withRedirect('/success'));
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return { loading, handleLogin } as const;
};
