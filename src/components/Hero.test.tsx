import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Hero from './Hero';
import { CONTACT_EMAIL } from '../constants/contact';

describe('Hero', () => {
  it('affiche un lien mailto vers le contact', () => {
    render(<Hero theme="light" />);
    const link = screen.getByRole('link', { name: 'Contacter' });
    expect(link).toHaveAttribute('href', expect.stringContaining(`mailto:${CONTACT_EMAIL}`));
  });
});
