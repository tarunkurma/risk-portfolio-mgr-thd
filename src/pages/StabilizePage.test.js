import React from 'react';
import { render, screen } from '../../test/test-utils';
import StabilizePage from './StabilizePage';

describe('StabilizePage', () => {
  it('renders the page title correctly', () => {
    render(<StabilizePage />);
    expect(screen.getByText('Stabilize Phase')).toBeInTheDocument();
  });

  it('displays all stabilize sections', () => {
    render(<StabilizePage />);
    expect(screen.getByText('STLC')).toBeInTheDocument();
    expect(screen.getByText('Data Management')).toBeInTheDocument();
    expect(screen.getByText('CICD - Stage Gates')).toBeInTheDocument();
    expect(screen.getByText('Resilience Testing')).toBeInTheDocument();
    expect(screen.getByText('Performance Optimization')).toBeInTheDocument();
  });

  it('contains a back link to the home page', () => {
    render(<StabilizePage />);
    const backLink = screen.getByText('Back to Home Page');
    expect(backLink).toBeInTheDocument();
    expect(backLink.closest('a')).toHaveAttribute('href', '/');
  });
});