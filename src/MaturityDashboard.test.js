import React from 'react';
import { render, screen, fireEvent } from '../test/test-utils';
import MaturityDashboard from './MaturityDashboard';

describe('MaturityDashboard', () => {
  it('renders the dashboard title and subtitle', () => {
    render(<MaturityDashboard />);
    expect(screen.getByText(/Comprehensive view of project maturity levels/i)).toBeInTheDocument();
  });

  it('renders the overall maturity score', () => {
    render(<MaturityDashboard />);
    expect(screen.getByText('72')).toBeInTheDocument();
    expect(screen.getByText(/Overall Maturity Score/i)).toBeInTheDocument();
  });

  it('renders the tab buttons', () => {
    render(<MaturityDashboard />);
    expect(screen.getByText(/Overview/i)).toBeInTheDocument();
    expect(screen.getByText(/Detailed Analysis/i)).toBeInTheDocument();
  });

  it('displays improvement areas section', () => {
    render(<MaturityDashboard />);
    expect(screen.getByText(/Release pipeline lacks automation/i)).toBeInTheDocument();
    expect(screen.getByText(/Configuration management prone to errors/i)).toBeInTheDocument();
  });

  it('displays recently completed improvements section', () => {
    render(<MaturityDashboard />);
    expect(screen.getByText(/Outdated dependencies with security vulnerabilities/i)).toBeInTheDocument();
  });

  it('switches to detailed analysis view when tab is clicked', () => {
    render(<MaturityDashboard />);
    fireEvent.click(screen.getByText(/Detailed Analysis/i));
    
    // Check for elements that are only in the detailed view
    expect(screen.getByText(/Risk Severity Distribution/i)).toBeInTheDocument();
    expect(screen.getByText(/Category Capability Maturity Assessment/i)).toBeInTheDocument();
  });
});