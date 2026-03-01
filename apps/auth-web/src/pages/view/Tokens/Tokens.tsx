import { LogOut } from 'lucide-solid';

import type { ApiToken } from '../../../api/auth.types';
import { Header, heading, Main, Page } from '../components/Page';
import { type Column, Table } from '../components/Table';
import { createTokens } from './createTokens';
import styles from './Tokens.module.css';

export const Tokens = () => {
  const {
    tokens,
    name,
    setName,
    loading,
    updatingId,
    updatingName,
    setUpdatingName,
    handleCreate,
    handleUpdate,
    handleDelete,
    startUpdate,
    cancelUpdate,
    handleLogout,
  } = createTokens();

  const columns: Column<ApiToken>[] = [
    { header: 'Name', key: 'name', editable: true },
    { header: 'Token', key: 'token', type: 'masked', copyable: true },
    { header: 'Last Used', key: 'last_used_at', type: 'date' },
  ];

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
        <div>
          <h1 class={heading}>API Tokens</h1>
          <p>Create and manage tokens for programmatic access.</p>
        </div>

        <Table
          columns={columns}
          rows={tokens}
          inputName={name}
          onInputNameChange={setName}
          loading={loading}
          onCreate={handleCreate}
          updatingId={updatingId}
          updatingValue={updatingName}
          onUpdatingValueChange={setUpdatingName}
          onUpdate={startUpdate}
          onUpdateCancel={cancelUpdate}
          onUpdateSave={handleUpdate}
          onDelete={handleDelete}
        />
      </Main>
    </Page>
  );
};
