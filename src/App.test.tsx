import React from 'react';
import { screen } from '@testing-library/react';
import App from './App';
import { renderWithRouter } from "./testHelpers";
import userEvent from "@testing-library/user-event";

describe("App", () => {
  it("renders the Create page", () => {
    renderWithRouter(<App />);

    userEvent.click(screen.getByText("Create"))

    expect(screen.getByText("Create your form")).toBeInTheDocument();
  })

  it("renders the Preview page", () => {
    renderWithRouter(<App />);

    userEvent.click(screen.getByText("Preview"))

    expect(screen.getByText("Preview your form")).toBeInTheDocument();
  })
})
