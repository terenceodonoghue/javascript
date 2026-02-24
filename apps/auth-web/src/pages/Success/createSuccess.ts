import { useSearchParams } from '@solidjs/router';
import { onMount } from 'solid-js';

export const createSuccess = () => {
  const [params] = useSearchParams();

  onMount(() => {
    const redirectUri = params.redirect_uri;
    if (typeof redirectUri === 'string') {
      const timer = setTimeout(() => {
        window.location.href = redirectUri;
      }, 4000);
      return () => clearTimeout(timer);
    }
  });

  return {
    redirecting: () => typeof params.redirect_uri === 'string',
  } as const;
};
