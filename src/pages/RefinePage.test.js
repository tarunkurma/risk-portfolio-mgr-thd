import React from 'react';
import { render, screen } from '../../test/test-utils';
import RefinePage from './RefinePage';

describe('RefinePage', () => {
  it('renders the page title correctly', () => {
    render(<RefinePage />);
    expect(screen.getByText('Refine Phase')).toBeInTheDocument();
  });

  it('displays all four refine sections', () => {
    render(<RefinePage />);
    expect(screen.getByText('Product Roadmap')).toBeInTheDocument();
    expect(screen.getByText('ROI Hypothesis')).toBeInTheDocument();
    expect(screen.getByText('Feature 360')).toBeInTheDocument();
    expect(screen.getByText('Story Curation')).toBeInTheDocument();
  });

  it('contains a back link to the home page', () => {
    render(<RefinePage />);
    const backLink = screen.getByText('Back to Home Page');
    expect(backLink).toBeInTheDocument();
    expect(backLink.closest('a')).toHaveAttribute('href', '/');
  });
});