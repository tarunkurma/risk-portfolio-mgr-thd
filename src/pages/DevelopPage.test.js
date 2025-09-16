import React from 'react';
import { render, screen, fireEvent } from '../../test/test-utils';
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

  it('allows maintainability container to be collapsed and expanded', () => {
    render(<DevelopPage />);
    
    // Initially expanded, should show content
    expect(screen.getByText(/Current State Challenges/i)).toBeInTheDocument();
    
    // Click the maintainability header to collapse
    const maintainabilityHeader = screen.getByText('Maintainability').closest('div');
    fireEvent.click(maintainabilityHeader);
    
    // Content should be hidden after collapse
    expect(screen.queryByText(/Current State Challenges/i)).not.toBeInTheDocument();
    
    // Click again to expand
    fireEvent.click(maintainabilityHeader);
    
    // Content should be visible again
    expect(screen.getByText(/Current State Challenges/i)).toBeInTheDocument();
  });

  it('allows all assessment containers to be collapsed and expanded', () => {
    render(<DevelopPage />);
    
    // Test Performance container
    const performanceHeader = screen.getByText('Performance').closest('div');
    expect(screen.getByText(/App Startup Performance/i)).toBeInTheDocument();
    fireEvent.click(performanceHeader);
    expect(screen.queryByText(/App Startup Performance/i)).not.toBeInTheDocument();
    
    // Test Reliability container
    const reliabilityHeader = screen.getByText('Reliability').closest('div');
    expect(screen.getByText(/iOS Crash-Free Rate/i)).toBeInTheDocument();
    fireEvent.click(reliabilityHeader);
    expect(screen.queryByText(/iOS Crash-Free Rate/i)).not.toBeInTheDocument();
    
    // Test Testing container
    const testingHeader = screen.getByText('Testing').closest('div');
    expect(screen.getByText(/Unit Test Coverage & Standards/i)).toBeInTheDocument();
    fireEvent.click(testingHeader);
    expect(screen.queryByText(/Unit Test Coverage & Standards/i)).not.toBeInTheDocument();
    
    // Test Technology container
    const technologyHeader = screen.getByText('Technology').closest('div');
    expect(screen.getByText(/Platform Migration Progress/i)).toBeInTheDocument();
    fireEvent.click(technologyHeader);
    expect(screen.queryByText(/Platform Migration Progress/i)).not.toBeInTheDocument();
    
    // Test Development Practices container
    const devPracticesHeader = screen.getByText('Development Practices').closest('div');
    expect(screen.getByText(/CI\/CD Pipeline Automation/i)).toBeInTheDocument();
    fireEvent.click(devPracticesHeader);
    expect(screen.queryByText(/CI\/CD Pipeline Automation/i)).not.toBeInTheDocument();
  });
});