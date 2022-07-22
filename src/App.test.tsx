import React from 'react';
import { screen } from '@testing-library/react';
import App from './App';
import { renderWithRouter } from "./testHelpers";
import userEvent from "@testing-library/user-event";

describe("App", () => {
  it("renders the Create page and adds and removes Create Field boxes", () => {
    renderWithRouter(<App />);

    // Navigate to /create
    userEvent.click(screen.getByText("Create"))

    // Add a Create Field box
    userEvent.click(screen.getByRole("button", { name: "add-field" }))

    // Expect fields
    expect(screen.getByText("Field 1")).toBeInTheDocument();
    expect(screen.getByLabelText("Input type")).toBeInTheDocument();
    expect(screen.getByLabelText("Label")).toBeInTheDocument();
    expect(screen.getByLabelText("Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Placeholder")).toBeInTheDocument();

    // Remove the Create Field box
    userEvent.click(screen.getByRole("button", { name: "remove-field" }))

    // Expect copy to be removed
    expect(screen.queryByLabelText("Input type")).not.toBeInTheDocument();

    // Add two boxes
    userEvent.click(screen.getByRole("button", { name: "add-field" }))
    userEvent.click(screen.getByRole("button", { name: "add-field" }))

    // Expect copy
    expect(screen.getByText("Field 1")).toBeInTheDocument();
    expect(screen.getByText("Field 2")).toBeInTheDocument();
  })

  it("renders the Preview page", () => {
    renderWithRouter(<App />);

    userEvent.click(screen.getByText("Preview"))

    expect(screen.getByText("Please add some fields")).toBeInTheDocument();
  })
})
