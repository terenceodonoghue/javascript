import { Index } from 'solid-js';

import { createOtpInput } from './createOtpInput';
import styles from './OtpInput.module.css';

interface OtpInputProps {
  value: string;
  onInput: (value: string) => void;
  onComplete?: () => void;
  length?: number;
}

export const OtpInput = (props: OtpInputProps) => {
  const refs: HTMLInputElement[] = [];
  const {
    digits,
    handleBeforeInput,
    handleInput,
    handleKeyDown,
    handleFocus,
    handleAutofill,
    handlePaste,
  } = createOtpInput(
    {
      value: () => props.value,
      onInput: props.onInput,
      onComplete: props.onComplete,
      length: props.length,
    },
    refs,
  );

  return (
    <fieldset class={styles['otp-input']}>
      <legend class={styles.legend}>Verification code</legend>
      <input
        class={styles.autofill}
        type="text"
        inputMode="numeric"
        autocomplete="one-time-code"
        onInput={handleAutofill}
        aria-hidden="true"
        tabIndex={-1}
      />
      <Index each={digits()}>
        {(digit, i) => (
          <input
            ref={(el) => {
              refs[i] = el;
            }}
            autofocus={i === 0}
            class={styles.digit}
            type="text"
            inputMode="numeric"
            pattern="[0-9]"
            maxLength={1}
            value={digit()}
            onFocus={() => handleFocus(i)}
            onBeforeInput={handleBeforeInput}
            onInput={(e) => handleInput(i, e)}
            onKeyDown={(e) => handleKeyDown(i, e)}
            onPaste={handlePaste}
            aria-label={`Digit ${i + 1}`}
          />
        )}
      </Index>
    </fieldset>
  );
};
