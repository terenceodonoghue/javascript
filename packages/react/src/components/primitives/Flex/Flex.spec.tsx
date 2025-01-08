import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';

import Flex from './Flex.js';

describe('Flex', () => {
  afterEach(cleanup);

  it('has spacing', () => {
    render(
      <Flex gx={2} gy={4}>
        with gx/gy
      </Flex>,
    );
    expect(screen.getByText('with gx/gy')).toHaveStyle({
      columnGap: '2rem',
      rowGap: '4rem',
      marginInline: '0rem',
      marginBlock: '0rem',
      paddingInline: '0rem',
      paddingBlock: '0rem',
    });
  });

  it('has margins', () => {
    render(
      <Flex mx={2} my={4}>
        with mx/my
      </Flex>,
    );
    expect(screen.getByText('with mx/my')).toHaveStyle({
      columnGap: '1rem',
      rowGap: '1rem',
      marginInline: '2rem',
      marginBlock: '4rem',
      paddingInline: '0rem',
      paddingBlock: '0rem',
    });
  });

  it('has padding', () => {
    render(
      <Flex px={2} py={4}>
        with px/py
      </Flex>,
    );
    expect(screen.getByText('with px/py')).toHaveStyle({
      columnGap: '1rem',
      rowGap: '1rem',
      marginInline: '0rem',
      marginBlock: '0rem',
      paddingInline: '2rem',
      paddingBlock: '4rem',
    });
  });

  describe('with column', () => {
    it('is column', () => {
      render(<Flex column>with column</Flex>);
      expect(screen.getByText('with column')).toHaveStyle({
        flexDirection: 'column',
      });
    });

    it('is row', () => {
      render(<Flex column={false}>without column</Flex>);
      expect(screen.getByText('without column')).toHaveStyle({
        flexDirection: 'row',
      });
    });
  });
});
