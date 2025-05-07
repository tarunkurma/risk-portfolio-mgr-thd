import React from 'react';
import { render, screen, fireEvent } from '../test/test-utils';
import RiskDashboard from './RiskDashboard';

describe('RiskDashboard', () => {
  it('renders the dashboard title and subtitle', () => {
    render(<RiskDashboard />);
    expect(screen.getByText(/Risk Dashboard/i)).toBeInTheDocument();
    expect(screen.getByText(/Comprehensive view of project risk factors/i)).toBeInTheDocument();
  });

  it('renders the overall risk score', () => {
    render(<RiskDashboard />);
    expect(screen.getByText('72')).toBeInTheDocument();
    expect(screen.getByText(/Overall Risk Score/i)).toBeInTheDocument();
  });

  it('renders the tab buttons', () => {
    render(<RiskDashboard />);
    expect(screen.getByText(/Overview/i)).toBeInTheDocument();
    expect(screen.getByText(/Detailed Analysis/i)).toBeInTheDocument();
  });

  it('displays top risks section', () => {
    render(<RiskDashboard />);
    expect(screen.getByText(/Top Risks/i)).toBeInTheDocument();
    expect(screen.getByText(/No accessibility review in Design/i)).toBeInTheDocument();
    expect(screen.getByText(/Insufficient feature definition in Refinement phase/i)).toBeInTheDocument();
  });

  it('displays recently mitigated risks section', () => {
    render(<RiskDashboard />);
    expect(screen.getByText(/Recently Mitigated/i)).toBeInTheDocument();
    expect(screen.getByText(/Outdated dependencies with security vulnerabilities/i)).toBeInTheDocument();
  });

  it('switches to detailed analysis view when tab is clicked', () => {
    render(<RiskDashboard />);
    fireEvent.click(screen.getByText(/Detailed Analysis/i));
    
    // Check for elements that are only in the detailed view
    expect(screen.getByText(/Risk Severity Distribution/i)).toBeInTheDocument();
    expect(screen.getByText(/Risk Category Assessment/i)).toBeInTheDocument();
  });
});