import React from 'react';
import { screen } from '@testing-library/react';
import App from './App';
import { renderWithRouter } from "./testHelpers";

test('renders learn react link', () => {
  renderWithRouter(<App />);

  expect(screen.getByText("Create")).toBeInTheDocument();
  expect(screen.getByText("Preview")).toBeInTheDocument();
});
