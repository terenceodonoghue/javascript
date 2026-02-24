import type {
  AuthenticationResponse,
  PublicKeyCredentialCreationOptions,
  PublicKeyCredentialRequestOptions,
  RegistrationResponse,
} from './auth.types';

const API = `${import.meta.env.VITE_API_BASE ?? ''}/api`;

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

export const loginBegin = (): Promise<PublicKeyCredentialRequestOptions> =>
  post('/login/begin');

export const loginFinish = (
  body: AuthenticationResponse,
): Promise<{ status: string }> => post('/login/finish', body);

export const registerBegin = (email: string): Promise<{ status: string }> =>
  post('/register/begin', { email });

export const registerVerify = (
  email: string,
  code: string,
): Promise<PublicKeyCredentialCreationOptions> =>
  post('/register/verify', { email, code });

export const registerFinish = (
  body: RegistrationResponse,
): Promise<{ status: string }> => post('/register/finish', body);
