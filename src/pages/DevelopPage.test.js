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
    expect(screen.getByText('Development Standards')).toBeInTheDocument();
    expect(screen.getByText('Code Quality')).toBeInTheDocument();
    expect(screen.getByText('Testing & Tooling')).toBeInTheDocument();
  });

  it('displays all development standard sections', () => {
    render(<DevelopPage />);
    expect(screen.getByText('Security Standards')).toBeInTheDocument();
    expect(screen.getByText('Branching Strategy')).toBeInTheDocument();
    expect(screen.getByText('Infra - Local | EUT')).toBeInTheDocument();
    expect(screen.getByText('Test Coverage')).toBeInTheDocument();
  });
  
  it('displays all code quality sections', () => {
    render(<DevelopPage />);
    expect(screen.getByText('Readability')).toBeInTheDocument();
    expect(screen.getByText('Review Process')).toBeInTheDocument();
  });
  
  it('displays all testing and tooling sections', () => {
    render(<DevelopPage />);
    expect(screen.getByText('Test Strategy')).toBeInTheDocument();
    expect(screen.getByText('Tools')).toBeInTheDocument();
  });

  it('contains a back link to the home page', () => {
    render(<DevelopPage />);
    const backLink = screen.getByText('Back to Home Page');
    expect(backLink).toBeInTheDocument();
    expect(backLink.closest('a')).toHaveAttribute('href', '/');
  });
});