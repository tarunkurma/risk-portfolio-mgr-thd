import React from 'react';
import { render, screen } from '../../test/test-utils';
import DevelopPage from './DevelopPage';

describe('DevelopPage', () => {
  it('renders the page title correctly', () => {
    render(<DevelopPage />);
    expect(screen.getByText('Develop Phase')).toBeInTheDocument();
    expect(screen.getByText('Building robust, maintainable, and secure code for your application')).toBeInTheDocument();
  });

  it('displays the assessment results section', () => {
    render(<DevelopPage />);
    expect(screen.getByText('Assessment Results')).toBeInTheDocument();
  });

  it('displays all assessment result containers', () => {
    render(<DevelopPage />);
    // Check for all the main assessment containers
    expect(screen.getByText('Maintainability')).toBeInTheDocument();
    expect(screen.getByText('Performance')).toBeInTheDocument();
    expect(screen.getByText('Reliability')).toBeInTheDocument();
    expect(screen.getByText('Testing')).toBeInTheDocument();
    expect(screen.getByText('Technology')).toBeInTheDocument();
    expect(screen.getByText('Development Practices')).toBeInTheDocument();
  });

  it('displays overall assessment summaries', () => {
    render(<DevelopPage />);
    expect(screen.getByText('Overall Maintainability')).toBeInTheDocument();
    expect(screen.getByText('Overall Performance')).toBeInTheDocument();
    expect(screen.getByText('Overall Reliability')).toBeInTheDocument();
    expect(screen.getByText('Overall Testing Maturity')).toBeInTheDocument();
    expect(screen.getByText('Overall Technology Maturity')).toBeInTheDocument();
    expect(screen.getByText('Overall Development Practices Maturity')).toBeInTheDocument();
  });

  it('contains a back link to the home page', () => {
    render(<DevelopPage />);
    const backLink = screen.getByText('Back to Home Page');
    expect(backLink).toBeInTheDocument();
    expect(backLink.closest('a')).toHaveAttribute('href', '/');
  });
});