import { Check, Copy, LogOut, Pencil, Plus, Trash2 } from 'lucide-solid';
import { For, Show } from 'solid-js';

import { Button } from '../../../components/Form/Form';
import { Body } from '../../../components/Text/Text';
import { Header, heading, Main, Page } from '../components/Page';
import { createTokens } from './createTokens';
import styles from './Tokens.module.css';

const maskToken = (token: string): string => {
  if (token.length <= 8) return token;
  const underscoreIdx = token.indexOf('_');
  const prefix =
    underscoreIdx !== -1
      ? token.slice(0, underscoreIdx + 1)
      : token.slice(0, 4);
  const suffix = token.slice(-4);
  return `${prefix}${'•'.repeat(16)}${suffix}`;
};

const formatDate = (iso: string | null): string => {
  if (!iso) return 'Never';
  return new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
};

export const Tokens = () => {
  const {
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
  } = createTokens();

  return (
    <Page>
      <Header>
        <h1 class={heading}>{import.meta.env.VITE_APP_TITLE}</h1>
        <button type="button" class={styles.logout} onClick={handleLogout}>
          <LogOut size={16} />
          Logout
        </button>
      </Header>

      <Main>
        <div class={styles.titleArea}>
          <h1 class={heading}>API Tokens</h1>
          <Body>Create and manage tokens for programmatic access.</Body>
        </div>

        <div class={styles.panel}>
          <form
            class={styles.toolbar}
            autocomplete="off"
            onSubmit={handleCreate}
          >
            <div class={styles.inputWrap}>
              <span class={styles.inputIcon}>
                <Plus size={16} />
              </span>
              <input
                type="text"
                placeholder="New token name..."
                value={name()}
                onInput={(e) => setName(e.currentTarget.value)}
                required
                style={{ 'padding-inline-start': 'var(--spacing-32)' }}
              />
            </div>
            <Button type="submit" disabled={loading() || !name()}>
              Create
            </Button>
          </form>

          <table class={styles.table}>
            <thead>
              <tr>
                <th class={styles.th}>Name</th>
                <th class={styles.th}>Token</th>
                <th class={styles.th}>Last Used</th>
                <th class={styles.th}>Actions</th>
              </tr>
            </thead>
            <tbody>
              <For each={tokens()}>
                {(token) => (
                  <tr>
                    <td class={styles.td}>
                      <Show
                        when={editingId() === token.id}
                        fallback={token.name}
                      >
                        <input
                          class={styles.editInput}
                          type="text"
                          value={editingName()}
                          onInput={(e) => setEditingName(e.currentTarget.value)}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') handleUpdate(token.id);
                            if (e.key === 'Escape') cancelEditing();
                          }}
                          ref={(el) => setTimeout(() => el.focus())}
                        />
                      </Show>
                    </td>
                    <td class={styles.td}>
                      <span class={styles.tokenCell}>
                        <span class={styles.tokenValue}>
                          {maskToken(token.token)}
                        </span>
                        <button
                          type="button"
                          class={styles.iconBtn}
                          title="Copy token"
                          onClick={() => handleCopy(token.token, token.id)}
                        >
                          <Show
                            when={copiedId() === token.id}
                            fallback={<Copy size={14} />}
                          >
                            <Check size={14} class={styles.checkIcon} />
                          </Show>
                        </button>
                      </span>
                    </td>
                    <td class={`${styles.td} ${styles.muted}`}>
                      {formatDate(token.last_used_at)}
                    </td>
                    <td class={styles.td}>
                      <div class={styles.actions}>
                        <Show
                          when={editingId() === token.id}
                          fallback={
                            <button
                              type="button"
                              class={styles.action}
                              onClick={() => startEditing(token.id, token.name)}
                            >
                              <Pencil size={14} />
                              Edit
                            </button>
                          }
                        >
                          <button
                            type="button"
                            class={styles.action}
                            onClick={() => handleUpdate(token.id)}
                          >
                            Save
                          </button>
                          <button
                            type="button"
                            class={styles.action}
                            onClick={cancelEditing}
                          >
                            Cancel
                          </button>
                        </Show>
                        <button
                          type="button"
                          class={styles.action}
                          onClick={() => handleDelete(token.id)}
                        >
                          <Trash2 size={14} />
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                )}
              </For>
            </tbody>
          </table>
        </div>
      </Main>
    </Page>
  );
};
