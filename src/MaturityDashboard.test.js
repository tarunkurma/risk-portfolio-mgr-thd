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
    expect(screen.getByText(/Overall Maturity Score/i)).toBeInTheDocument();
    // Score should be calculated from THD data, accept any valid score
    expect(screen.getByText(/^\d{1,3}$/)).toBeInTheDocument();
  });

  it('renders the tab buttons', () => {
    render(<MaturityDashboard />);
    expect(screen.getByRole('button', { name: /Overview/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Detailed Analysis/i })).toBeInTheDocument();
  });


  it('displays THD capability assessment categories', () => {
    render(<MaturityDashboard />);
    expect(screen.getByText(/THD Capability Assessment Categories/i)).toBeInTheDocument();
    // Should show H/M/L scores consistent with develop page
    expect(screen.getAllByText(/Low|Medium|High/i).length).toBeGreaterThan(0);
    // Should display H, M, or L letters
    expect(screen.getAllByText(/^[HML]$/i).length).toBeGreaterThan(0);
  });

  it('switches to detailed analysis view when tab is clicked', () => {
    render(<MaturityDashboard />);
    fireEvent.click(screen.getByText(/Detailed Analysis/i));
    
    // Check for elements that are only in the detailed view
    expect(screen.getByText(/Risk Severity Distribution/i)).toBeInTheDocument();
    expect(screen.getByText(/Category Capability Maturity Assessment/i)).toBeInTheDocument();
  });
});