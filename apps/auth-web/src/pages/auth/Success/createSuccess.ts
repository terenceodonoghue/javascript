import { useNavigate } from '@solidjs/router';
import { onMount } from 'solid-js';

export const createSuccess = () => {
  const navigate = useNavigate();

  onMount(() => {
    const timer = setTimeout(() => {
      navigate('/tokens');
    }, 4000);
    return () => clearTimeout(timer);
  });
};
