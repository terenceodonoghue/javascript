import { useNavigate } from '@solidjs/router';
import { createSignal } from 'solid-js';

import { registerBegin } from '../../api/auth';
import { withRedirect } from '../../lib/redirect';
import { setRegistrationEmail } from '../../store/registration';

export const createRegister = () => {
  const navigate = useNavigate();
  const [email, setEmail] = createSignal('');
  const [loading, setLoading] = createSignal(false);

  const handleSubmit = async (e: SubmitEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await registerBegin(email());
      setRegistrationEmail(email());
      navigate(withRedirect('/register/verify'));
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return { email, setEmail, loading, handleSubmit } as const;
};
