import React from 'react';
import { render, screen } from '../../test/test-utils';
import DevelopPage from './DevelopPage';

describe('DevelopPage', () => {
  it('renders the page title correctly', () => {
    render(<DevelopPage />);
    expect(screen.getByText('Develop Phase')).toBeInTheDocument();
  });

  it('displays all section groups', () => {
    render(<DevelopPage />);
    expect(screen.getAllByText('Dev Standards')).toHaveLength(2); // Criteria + Results sections
    expect(screen.getAllByText('Code Quality')).toHaveLength(2); // Criteria + Results sections
    expect(screen.getByText('Assessment Criteria')).toBeInTheDocument();
  });

  it('displays all assessment criteria sections', () => {
    render(<DevelopPage />);
    expect(screen.getAllByText('Security Standards')).toHaveLength(2); // Criteria + Results sections
    expect(screen.getAllByText('Dev Standards')).toHaveLength(2); // Criteria + Results sections
    expect(screen.getAllByText('Infra - Local | EUT')).toHaveLength(2); // Criteria + Results sections
    expect(screen.getAllByText('Code Quality')).toHaveLength(2); // Criteria + Results sections
  });
  
  it('displays assessment results sections', () => {
    render(<DevelopPage />);
    expect(screen.getByText('Assessment Results')).toBeInTheDocument();
    expect(screen.getByText('Maintainability')).toBeInTheDocument();
    expect(screen.getByText('Overall Maintainability')).toBeInTheDocument();
  });

  it('contains a back link to the home page', () => {
    render(<DevelopPage />);
    const backLink = screen.getByText('Back to Home Page');
    expect(backLink).toBeInTheDocument();
    expect(backLink.closest('a')).toHaveAttribute('href', '/');
  });
});