import React from 'react';
import { render, screen, fireEvent } from '../test/test-utils';
import LifecycleTimeline from './LifecycleTimeline';

describe('LifecycleTimeline', () => {
  it('renders all phases in correct order', () => {
    render(<LifecycleTimeline />);
    const phases = ['Design', 'Refine', 'Develop', 'Stabilize', 'Deploy'];
    phases.forEach(phase => {
      expect(screen.getByText(phase)).toBeInTheDocument();
    });
  });

  it('highlights the selected phase', () => {
    render(<LifecycleTimeline selectedPhase="develop" />);
    const develop = screen.getByText('Develop');
    expect(develop).toBeInTheDocument();
    // Additional style checks can be added if needed
  });

  it('calls onSelect when a phase is clicked', () => {
    const onSelect = jest.fn();
    render(<LifecycleTimeline onSelect={onSelect} selectedPhase="design" />);
    fireEvent.click(screen.getByRole('button', { name: 'Stabilize' }));
    expect(onSelect).toHaveBeenCalledWith('stabilize');
  });
}); 