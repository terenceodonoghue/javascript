import { useNavigate } from '@solidjs/router';
import { createSignal, onCleanup, onMount } from 'solid-js';

import {
  createToken,
  deleteToken,
  listTokens,
  logout,
  updateToken,
} from '../../api/auth';
import type { ApiToken } from '../../api/auth.types';

export const createTokens = () => {
  const navigate = useNavigate();
  const [tokens, setTokens] = createSignal<ApiToken[]>([]);
  const [name, setName] = createSignal('');
  const [loading, setLoading] = createSignal(false);
  const [editingId, setEditingId] = createSignal<string | null>(null);
  const [editingName, setEditingName] = createSignal('');
  const [copiedId, setCopiedId] = createSignal<string | null>(null);

  let copyTimer: ReturnType<typeof setTimeout> | undefined;
  onCleanup(() => clearTimeout(copyTimer));

  const handleUnauthorized = async () => {
    try {
      await logout();
    } catch {
      // Session likely already expired
    }
    navigate('/');
  };

  const isUnauthorized = (err: unknown) =>
    err instanceof Error && err.message === 'unauthorized';

  onMount(async () => {
    try {
      setTokens(await listTokens());
    } catch (err) {
      if (isUnauthorized(err)) {
        await handleUnauthorized();
      }
    }
  });

  const handleCreate = async (e: SubmitEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const token = await createToken(name());
      setTokens((prev) => [token, ...prev]);
      setName('');
    } catch (err) {
      if (isUnauthorized(err)) {
        await handleUnauthorized();
        return;
      }
      alert(err instanceof Error ? err.message : 'Failed to create token');
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async (id: string) => {
    try {
      const updated = await updateToken(id, editingName());
      setTokens((prev) => prev.map((t) => (t.id === id ? updated : t)));
      setEditingId(null);
    } catch (err) {
      if (isUnauthorized(err)) {
        await handleUnauthorized();
        return;
      }
      alert(err instanceof Error ? err.message : 'Failed to update token');
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this token?')) return;

    try {
      await deleteToken(id);
      setTokens((prev) => prev.filter((t) => t.id !== id));
    } catch (err) {
      if (isUnauthorized(err)) {
        await handleUnauthorized();
        return;
      }
      alert(err instanceof Error ? err.message : 'Failed to delete token');
    }
  };

  const handleCopy = async (token: string, id: string) => {
    await navigator.clipboard.writeText(token);
    clearTimeout(copyTimer);
    setCopiedId(id);
    copyTimer = setTimeout(() => setCopiedId(null), 1500);
  };

  const startEditing = (id: string, currentName: string) => {
    setEditingId(id);
    setEditingName(currentName);
  };

  const cancelEditing = () => {
    setEditingId(null);
  };

  const handleLogout = async () => {
    try {
      await logout();
    } finally {
      navigate('/');
    }
  };

  return {
    tokens,
    name,
    setName,
    loading,
    editingId,
    editingName,
    setEditingName,
    copiedId,
    handleCreate,
    handleUpdate,
    handleDelete,
    handleCopy,
    startEditing,
    cancelEditing,
    handleLogout,
  } as const;
};
