import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('affiche la proposition de valeur', () => {
    render(<App />);
    expect(
      screen.getByText('Des environnements de développement prêts en quelques minutes'),
    ).toBeInTheDocument();
  });

  it('affiche le bouton Contacter', () => {
    render(<App />);
    expect(screen.getByRole('link', { name: 'Contacter' })).toBeInTheDocument();
  });

  it('affiche la liste du stack technique', () => {
    render(<App />);
    expect(screen.getByText('Docker')).toBeInTheDocument();
    expect(screen.getByText('Code Server')).toBeInTheDocument();
    expect(screen.getByText('Claude Code')).toBeInTheDocument();
  });
});
