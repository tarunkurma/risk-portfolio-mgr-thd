import React from 'react';
import { render, screen } from '../../test/test-utils';
import DesignPage from './DesignPage';

describe('DesignPage', () => {
  it('renders the page title correctly', () => {
    render(<DesignPage />);
    expect(screen.getByText('Design Phase')).toBeInTheDocument();
  });

  it('displays all four design sections', () => {
    render(<DesignPage />);
    expect(screen.getByText('UX Research')).toBeInTheDocument();
    expect(screen.getByText('Accessibility')).toBeInTheDocument();
    expect(screen.getByText('A/B Testing')).toBeInTheDocument();
    expect(screen.getByText('Wireframes')).toBeInTheDocument();
  });

  it('contains a back link to the home page', () => {
    render(<DesignPage />);
    const backLink = screen.getByText('Back to Home Page');
    expect(backLink).toBeInTheDocument();
    expect(backLink.closest('a')).toHaveAttribute('href', '/');
  });
});