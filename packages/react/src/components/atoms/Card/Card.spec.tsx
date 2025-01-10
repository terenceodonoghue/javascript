import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';

import Card from './Card.js';

describe('Card', () => {
  afterEach(cleanup);

  it('has accessible role', () => {
    render(<Card />);
    expect(screen.getByRole('article')).toBeInTheDocument();
  });

  describe('with heading', () => {
    it('has accessible name', () => {
      render(<Card heading="Heading text" />);
      expect(screen.getByRole('article')).toHaveAccessibleName('Heading text');
    });
  });
});
