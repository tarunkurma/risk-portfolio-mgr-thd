import React from 'react';
import { render, screen } from '../test/test-utils';
import Header from './Header';

describe('Header', () => {
  it('renders the SK logo', () => {
    render(<Header />);
    expect(screen.getByAltText(/stable kernel logo/i)).toBeInTheDocument();
  });

  it('renders all navigation links', () => {
    render(<Header />);
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
    expect(screen.getByText(/Maturity Dashboard/i)).toBeInTheDocument();
    expect(screen.getByText(/Mitigation Roadmap/i)).toBeInTheDocument();
    expect(screen.getByText(/View Assessment/i)).toBeInTheDocument();
  });
}); 