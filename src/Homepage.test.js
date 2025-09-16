import React from 'react';
import { render, screen } from '../test/test-utils';
import Homepage from './Homepage';

describe('Homepage', () => {
  it('renders the main title and subtitle', () => {
    render(<Homepage />);
    expect(screen.getByRole('heading', { name: /Capability Maturity Assessment/i, level: 1 })).toBeInTheDocument();
    expect(screen.getByText(/Evaluate and improve capabilities across every phase/i)).toBeInTheDocument();
  });

  it('renders the lifecycle phase navigation buttons', () => {
    render(<Homepage />);
    expect(screen.getByRole('button', { name: /Design/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Develop/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Deploy/i })).toBeInTheDocument();
  });

  it('renders the watermark image', () => {
    render(<Homepage />);
    expect(screen.getByAltText(/Watermark/i)).toBeInTheDocument();
  });
}); 