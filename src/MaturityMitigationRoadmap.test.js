import React from 'react';
import { render, screen } from '../test/test-utils';
import MaturityMitigationRoadmap from './MaturityMitigationRoadmap';

describe('MaturityMitigationRoadmap', () => {
  it('renders the roadmap title', () => {
    render(<MaturityMitigationRoadmap />);
    expect(screen.getByText(/Risk Mitigation Roadmap/i)).toBeInTheDocument();
  });

  it('renders the risk mitigation status section', () => {
    render(<MaturityMitigationRoadmap />);
    expect(screen.getByText(/Risk Mitigation Status by Category/i)).toBeInTheDocument();
  });

  it('renders the legend items', () => {
    render(<MaturityMitigationRoadmap />);
    expect(screen.getAllByText(/Mitigated/i)).toHaveLength(2); // Legend and section title
    expect(screen.getByText(/In Progress/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Unmitigated/i)).toHaveLength(1);
  });

  it('displays completed mitigations section', () => {
    render(<MaturityMitigationRoadmap />);
    expect(screen.getByText(/Completed Mitigations/i)).toBeInTheDocument();
    expect(screen.getByText(/SQL Injection Vulnerability/i)).toBeInTheDocument();
    expect(screen.getByText(/Clear-Text Password Storage/i)).toBeInTheDocument();
  });

  it('displays pending mitigations section', () => {
    render(<MaturityMitigationRoadmap />);
    expect(screen.getByText(/Pending Mitigations/i)).toBeInTheDocument();
    expect(screen.getByText(/Insufficient Rate Limiting/i)).toBeInTheDocument();
    expect(screen.getByText(/Weak Password Requirements/i)).toBeInTheDocument();
  });

  it('shows the last updated timestamp', () => {
    render(<MaturityMitigationRoadmap />);
    expect(screen.getByText(/Last updated:/i)).toBeInTheDocument();
  });
});