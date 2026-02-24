interface OtpInputOptions {
  value: () => string;
  onInput: (value: string) => void;
  onComplete?: () => void;
  length?: number;
}

export const createOtpInput = (
  options: OtpInputOptions,
  refs: HTMLInputElement[],
) => {
  const length = options.length ?? 6;

  const digits = () => {
    const chars = options.value().split('');
    return Array.from({ length }, (_, i) => chars[i] ?? '');
  };

  const setValue = (value: string) => {
    options.onInput(value);
    refs[Math.min(value.length, length - 1)]?.focus();
    if (value.length === length) {
      options.onComplete?.();
    }
  };

  const handleBeforeInput = (e: InputEvent) => {
    if (e.data && !/^\d$/.test(e.data)) {
      e.preventDefault();
    }
  };

  const handleInput = (index: number, e: InputEvent) => {
    const target = e.currentTarget as HTMLInputElement;
    const digit = target.value.replace(/\D/g, '').slice(-1);
    const current = digits();
    current[index] = digit;
    const value = current.join('');
    options.onInput(value);

    if (value.length === length) {
      options.onComplete?.();
    } else if (digit && index < length - 1) {
      refs[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: KeyboardEvent) => {
    if (e.key === 'Backspace') {
      e.preventDefault();
      if (digits()[index]) {
        const current = digits();
        current.splice(index, 1);
        current.push('');
        options.onInput(current.join(''));
      }
      if (index > 0) {
        refs[index - 1]?.focus();
      }
    }
  };

  const handleFocus = (index: number) => {
    const firstEmpty = digits().findIndex((v) => !v);
    if (firstEmpty !== -1 && firstEmpty < index) {
      refs[firstEmpty]?.focus();
      return;
    }
    refs[index]?.select();
  };

  const handleAutofill = (e: InputEvent) => {
    const value = (e.currentTarget as HTMLInputElement).value
      .replace(/\D/g, '')
      .slice(0, length);

    if (value) {
      setValue(value);
    }
  };

  const handlePaste = (e: ClipboardEvent) => {
    e.preventDefault();
    const pasted = (e.clipboardData?.getData('text') ?? '')
      .replace(/\D/g, '')
      .slice(0, length);

    setValue(pasted);
  };

  return {
    length,
    digits,
    handleBeforeInput,
    handleInput,
    handleKeyDown,
    handleFocus,
    handleAutofill,
    handlePaste,
  } as const;
};
