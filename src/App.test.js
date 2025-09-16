import React, { useState } from 'react';
import { render, screen } from '../test/test-utils';
import App from './App';

test('renders main application title', () => {
  render(<App />);
  const titleElement = screen.getByRole('heading', { name: /Capability Maturity Assessment/i, level: 1 });
  expect(titleElement).toBeInTheDocument();
});
