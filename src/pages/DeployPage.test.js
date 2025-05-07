import React from 'react';
import { render, screen } from '../../test/test-utils';
import DeployPage from './DeployPage';

describe('DeployPage', () => {
  it('renders the page title correctly', () => {
    render(<DeployPage />);
    expect(screen.getByText('Deploy Phase')).toBeInTheDocument();
  });

  it('displays all deploy sections', () => {
    render(<DeployPage />);
    expect(screen.getByText('Feature Rollouts')).toBeInTheDocument();
    expect(screen.getByText('Observability')).toBeInTheDocument();
    expect(screen.getByText('Contingencies')).toBeInTheDocument();
    expect(screen.getByText('Analytics')).toBeInTheDocument();
    expect(screen.getByText('Continuous Improvement')).toBeInTheDocument();
  });

  it('contains a back link to the home page', () => {
    render(<DeployPage />);
    const backLink = screen.getByText('Back to Home Page');
    expect(backLink).toBeInTheDocument();
    expect(backLink.closest('a')).toHaveAttribute('href', '/');
  });
});