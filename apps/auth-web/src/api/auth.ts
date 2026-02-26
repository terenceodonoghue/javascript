import type {
  AuthenticationResponse,
  PublicKeyCredentialCreationOptions,
  PublicKeyCredentialRequestOptions,
  RegistrationResponse,
} from './auth.types';

const API = `${import.meta.env.VITE_API_BASE ?? ''}/api`;

async function get<T>(path: string): Promise<T> {
  const res = await fetch(`${API}${path}`, { credentials: 'include' });
  if (!res.ok) {
    throw new Error(await res.text());
  }
  return res.json() as Promise<T>;
}

async function post<T>(path: string, body?: unknown): Promise<T> {
  const res = await fetch(`${API}${path}`, {
    method: 'POST',
    headers: body !== undefined ? { 'Content-Type': 'application/json' } : {},
    credentials: 'include',
    body: body !== undefined ? JSON.stringify(body) : undefined,
  });
  if (!res.ok) {
    throw new Error(await res.text());
  }
  return res.json() as Promise<T>;
}

export const getNetworkContext = (): Promise<{ network: string }> =>
  get('/network');

export const loginBegin = (): Promise<PublicKeyCredentialRequestOptions> =>
  post('/login/begin');

export const loginFinish = (
  body: AuthenticationResponse,
): Promise<{ status: string }> => post('/login/finish', body);

export const registerBegin = (
  name: string,
): Promise<PublicKeyCredentialCreationOptions> =>
  post('/register/begin', { name });

export const registerFinish = (
  body: RegistrationResponse,
): Promise<{ status: string }> => post('/register/finish', body);
