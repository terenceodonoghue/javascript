import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';

import ThemeProvider from '../../providers/ThemeProvider.js';
import Avatar from '../Avatar.js';

describe('Avatar', () => {
  afterEach(cleanup);

  describe('with alt', () => {
    it('has accessible name', () => {
      render(<Avatar alt="Alt text" />, {
        wrapper: ThemeProvider,
      });
      expect(screen.getByRole('img')).toHaveAccessibleName('Alt text');
    });
  });

  describe('with size', () => {
    it('has height/width', () => {
      render(<Avatar size={1} />, { wrapper: ThemeProvider });
      expect(screen.getByRole('img')).toHaveStyle({
        height: '1rem',
        width: '1rem',
      });
    });
  });

  describe('with type', () => {
    it('has rounded style', () => {
      render(<Avatar type="rounded" />, { wrapper: ThemeProvider });
      expect(screen.getByRole('img')).toHaveStyle({
        borderRadius: '50%',
      });
    });

    it('has squared style', () => {
      render(<Avatar type="squared" />, { wrapper: ThemeProvider });
      expect(screen.getByRole('img')).toHaveStyle({
        borderRadius: '0.375rem',
      });
    });
  });
});
