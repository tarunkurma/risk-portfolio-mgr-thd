import React from 'react';
import { render, screen } from '../test/test-utils';
import RiskMitigationRoadmap from './RiskMitigationRoadmap';

describe('RiskMitigationRoadmap', () => {
  it('renders the roadmap title', () => {
    render(<RiskMitigationRoadmap />);
    expect(screen.getByText(/Risk Mitigation Roadmap/i)).toBeInTheDocument();
  });

  it('renders the risk mitigation status section', () => {
    render(<RiskMitigationRoadmap />);
    expect(screen.getByText(/Risk Mitigation Status by Category/i)).toBeInTheDocument();
  });

  it('renders the legend items', () => {
    render(<RiskMitigationRoadmap />);
    expect(screen.getByText(/Mitigated/i)).toBeInTheDocument();
    expect(screen.getByText(/In Progress/i)).toBeInTheDocument();
    expect(screen.getByText(/Unmitigated/i)).toBeInTheDocument();
  });

  it('displays completed mitigations section', () => {
    render(<RiskMitigationRoadmap />);
    expect(screen.getByText(/Completed Mitigations/i)).toBeInTheDocument();
    expect(screen.getByText(/SQL Injection Vulnerability/i)).toBeInTheDocument();
    expect(screen.getByText(/Clear-Text Password Storage/i)).toBeInTheDocument();
  });

  it('displays pending mitigations section', () => {
    render(<RiskMitigationRoadmap />);
    expect(screen.getByText(/Pending Mitigations/i)).toBeInTheDocument();
    expect(screen.getByText(/Insufficient Rate Limiting/i)).toBeInTheDocument();
    expect(screen.getByText(/Weak Password Requirements/i)).toBeInTheDocument();
  });

  it('shows the last updated timestamp', () => {
    render(<RiskMitigationRoadmap />);
    expect(screen.getByText(/Last updated:/i)).toBeInTheDocument();
  });
});