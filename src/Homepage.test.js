import React from 'react';
import { render, screen } from '../test/test-utils';
import Homepage from './Homepage';

describe('Homepage', () => {
  it('renders the main title and subtitle', () => {
    render(<Homepage />);
    expect(screen.getByText(/Software Lifecycle Risk Evaluation/i)).toBeInTheDocument();
    expect(screen.getByText(/Assess risk across every phase/i)).toBeInTheDocument();
  });

  it('renders the CTA button', () => {
    render(<Homepage />);
    expect(screen.getByRole('button', { name: /Start Assessment/i })).toBeInTheDocument();
  });

  it('renders the watermark image', () => {
    render(<Homepage />);
    expect(screen.getByAltText(/Watermark/i)).toBeInTheDocument();
  });
}); 