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

    // Expect copy
    expect(screen.getByText("Field 1")).toBeInTheDocument();

    // Remove the Create Field box
    userEvent.click(screen.getByRole("button", { name: "remove-field" }))

    // Expect copy to be removed
    expect(screen.queryByText("Field 1")).not.toBeInTheDocument();

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

  it("saves form and persists form state to preview", () => {
    renderWithRouter(<App />, { initialEntries: ["/create"] });

    userEvent.click(screen.getByRole("button", { name: "add-field" }))

    userEvent.selectOptions(
      screen.getByRole("combobox"),
      screen.getByRole("option", { name: "text" })
    )
    userEvent.paste(screen.getByLabelText("Label"), "Favourite sport")
    userEvent.paste(screen.getByLabelText("Name"), "favourite-sport")
    userEvent.paste(screen.getByLabelText("Placeholder"), "Tennis")
    userEvent.click(screen.getByRole("button", { name: "save" }))

    userEvent.click(screen.getByText("Preview"))

    expect(screen.getByText("Favourite sport")).toBeInTheDocument();
  })
})
