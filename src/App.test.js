import React, { useState } from 'react';
import { render, screen } from '../test/test-utils';
import App from './App';

test('renders main application title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Capability Maturity Assessment/i);
  expect(titleElement).toBeInTheDocument();
});
