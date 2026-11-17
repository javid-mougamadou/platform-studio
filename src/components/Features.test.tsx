import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Features from './Features';

describe('Features', () => {
  it('affiche les 3 sous-sections', () => {
    render(<Features theme="light" />);
    expect(screen.getByText("Création d'environnement en 1 minute")).toBeInTheDocument();
    expect(screen.getByText("Création d'applications")).toBeInTheDocument();
    expect(screen.getByText('Collaboration efficace')).toBeInTheDocument();
  });
});
