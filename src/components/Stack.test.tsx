import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Stack from './Stack';

describe('Stack', () => {
  it('liste les technologies incluses', () => {
    render(<Stack theme="light" />);
    ['Docker', 'Python', 'Node.js', 'Code Server', 'Codex', 'Claude Code'].forEach((name) => {
      expect(screen.getByText(name)).toBeInTheDocument();
    });
  });
});
