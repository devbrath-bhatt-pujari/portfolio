import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders welcome text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Devbrath/i);
  expect(linkElement).toBeInTheDocument();
});