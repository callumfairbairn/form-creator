import React from 'react';
import { screen } from '@testing-library/react';
import App from './App';
import { renderWithRouter } from "./testHelpers";
import userEvent from "@testing-library/user-event";

describe("App", () => {
  it("renders the Create page", () => {
    renderWithRouter(<App />);

    userEvent.click(screen.getByText("Create"))
    userEvent.click(screen.getByRole("button", { name: "add-field" }))

    expect(screen.getByLabelText("Input type")).toBeInTheDocument();
  })

  it("renders the Preview page", () => {
    renderWithRouter(<App />);

    userEvent.click(screen.getByText("Preview"))

    expect(screen.getByText("Preview your form")).toBeInTheDocument();
  })
})
