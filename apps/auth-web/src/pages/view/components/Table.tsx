import { Check, Copy, Pencil, Plus, Trash2 } from 'lucide-solid';
import {
  type Accessor,
  createSignal,
  For,
  type JSX,
  onCleanup,
  Show,
} from 'solid-js';

import { formatDate, formatMasked } from '@terenceodonoghue/utils';

import { Button } from '../../../components/Button';
import styles from './css/Table.module.css';

export interface Column<T> {
  header: string;
  key: keyof T;
  copyable?: boolean;
  editable?: boolean;
  render?: (value: T[keyof T], row: T) => JSX.Element | string;
  type?: 'date' | 'masked';
}

interface TableProps<T extends { id: string }> {
  columns: Column<T>[];
  rows: Accessor<T[]>;
  inputName: Accessor<string>;
  onInputNameChange: (value: string) => void;
  loading: Accessor<boolean>;
  onCreate: (e: SubmitEvent) => void;
  updatingId: Accessor<string | null>;
  updatingValue: Accessor<string>;
  onUpdatingValueChange: (value: string) => void;
  onUpdate: (id: string, currentValue: string) => void;
  onUpdateCancel: () => void;
  onUpdateSave: (id: string) => void;
  onDelete: (id: string) => void;
}

export const Table = <T extends { id: string }>(props: TableProps<T>) => {
  const editableColumn = () => props.columns.find((col) => col.editable);

  const [copiedId, setCopiedId] = createSignal<string | null>(null);
  let copyTimer: ReturnType<typeof setTimeout> | undefined;
  onCleanup(() => clearTimeout(copyTimer));

  const handleCopy = async (value: string, id: string) => {
    await navigator.clipboard.writeText(value);
    clearTimeout(copyTimer);
    setCopiedId(id);
    copyTimer = setTimeout(() => setCopiedId(null), 1500);
  };

  const renderCell = (col: Column<T>, row: T) => {
    const value = row[col.key];
    let content: JSX.Element | string;

    if (col.render) {
      content = col.render(value, row);
    } else if (col.type === 'date') {
      content = formatDate(value as string | null);
    } else if (col.type === 'masked') {
      content = (
        <span class={styles.maskedValue}>
          {formatMasked(String(value ?? ''), 4)}
        </span>
      );
    } else {
      content = String(value ?? '');
    }

    if (!col.copyable) return content;

    return (
      <span class={styles.copyCell}>
        {content}
        <button
          type="button"
          class={styles.copyBtn}
          title="Copy to clipboard"
          onClick={() => handleCopy(String(row[col.key] ?? ''), row.id)}
        >
          <Show when={copiedId() === row.id} fallback={<Copy size={14} />}>
            <Check size={14} class={styles.checkIcon} />
          </Show>
        </button>
      </span>
    );
  };

  return (
    <table class={styles.table}>
      <caption class={styles.toolbar}>
        <form
          class={styles.layout}
          autocomplete="off"
          onSubmit={props.onCreate}
        >
          <div class={styles.inputWrap}>
            <span class={styles.inputIcon}>
              <Plus size={16} />
            </span>
            <input
              type="text"
              placeholder="New token name..."
              value={props.inputName()}
              onInput={(e) => props.onInputNameChange(e.currentTarget.value)}
              required
              style={{ 'padding-inline-start': 'var(--spacing-32)' }}
            />
          </div>
          <Button
            size="sm"
            type="submit"
            disabled={props.loading() || !props.inputName()}
          >
            Create
          </Button>
        </form>
      </caption>
      <thead>
        <tr>
          <For each={props.columns}>
            {(col) => <th class={styles.th}>{col.header}</th>}
          </For>
          <th class={styles.th}>Actions</th>
        </tr>
      </thead>
      <tbody>
        <For each={props.rows()}>
          {(row) => (
            <tr>
              <For each={props.columns}>
                {(col) => (
                  <td class={styles.td}>
                    <Show
                      when={!(col.editable && props.updatingId() === row.id)}
                      fallback={
                        <input
                          class={styles.editInput}
                          type="text"
                          value={props.updatingValue()}
                          onInput={(e) =>
                            props.onUpdatingValueChange(e.currentTarget.value)
                          }
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') props.onUpdateSave(row.id);
                            if (e.key === 'Escape') props.onUpdateCancel();
                          }}
                          ref={(el) => setTimeout(() => el.focus())}
                        />
                      }
                    >
                      {renderCell(col, row)}
                    </Show>
                  </td>
                )}
              </For>
              <td class={styles.td}>
                <div class={styles.actions}>
                  <Show
                    when={props.updatingId() === row.id}
                    fallback={
                      <button
                        type="button"
                        class={styles.action}
                        onClick={() => {
                          const key = editableColumn()?.key;
                          props.onUpdate(
                            row.id,
                            key ? String(row[key] ?? '') : '',
                          );
                        }}
                      >
                        <Pencil size={14} />
                        Edit
                      </button>
                    }
                  >
                    <button
                      type="button"
                      class={styles.action}
                      onClick={() => props.onUpdateSave(row.id)}
                    >
                      Save
                    </button>
                    <button
                      type="button"
                      class={styles.action}
                      onClick={props.onUpdateCancel}
                    >
                      Cancel
                    </button>
                  </Show>
                  <button
                    type="button"
                    class={styles.action}
                    onClick={() => props.onDelete(row.id)}
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
  );
};
