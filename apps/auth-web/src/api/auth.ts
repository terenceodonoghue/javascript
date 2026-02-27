import type {
  ApiToken,
  AuthenticationResponse,
  PublicKeyCredentialCreationOptions,
  PublicKeyCredentialRequestOptions,
  RegistrationResponse,
} from './auth.types';

const API = `${import.meta.env.VITE_API_BASE ?? ''}/api`;

// --- Helpers ---

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

async function patch<T>(path: string, body: unknown): Promise<T> {
  const res = await fetch(`${API}${path}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    throw new Error(await res.text());
  }
  return res.json() as Promise<T>;
}

async function del(path: string): Promise<void> {
  const res = await fetch(`${API}${path}`, {
    method: 'DELETE',
    credentials: 'include',
  });
  if (!res.ok) {
    throw new Error(await res.text());
  }
}

// --- Auth ---

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

export const logout = async (): Promise<void> => {
  const res = await fetch(`${API}/logout`, {
    method: 'POST',
    credentials: 'include',
  });
  if (!res.ok) {
    throw new Error(await res.text());
  }
};

// --- Tokens ---

export const listTokens = (): Promise<ApiToken[]> => get('/tokens');

export const createToken = (name: string): Promise<ApiToken> =>
  post('/tokens', { name });

export const updateToken = (id: string, name: string): Promise<ApiToken> =>
  patch(`/tokens/${id}`, { name });

export const deleteToken = (id: string): Promise<void> => del(`/tokens/${id}`);
