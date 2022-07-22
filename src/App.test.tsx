import React from 'react';
import { screen } from '@testing-library/react';
import App from './App';
import { renderWithRouter } from "./testHelpers";
import userEvent from "@testing-library/user-event";

const fillInTextFields = () => {
  userEvent.paste(screen.getByLabelText("Label"), "Favourite sport")
  userEvent.paste(screen.getByLabelText("Name"), "favourite-sport")
  userEvent.paste(screen.getByLabelText("Placeholder"), "Tennis")
}

describe("App", () => {
  it("renders the Create page and adds and removes Create Field boxes", () => {
    renderWithRouter(<App />);

    // Navigate to /create
    userEvent.click(screen.getByText("Create"))

    // Add a Create Field box and expect that it renders copy for that field
    userEvent.click(screen.getByRole("button", { name: "add-field" }))
    expect(screen.getByText("Field 1")).toBeInTheDocument();

    // Remove the Create Field box and expect copy to be removed
    userEvent.click(screen.getByRole("button", { name: "remove-field" }))
    expect(screen.queryByText("Field 1")).not.toBeInTheDocument();

    // Add two boxes and expect that it renders copy for both
    userEvent.click(screen.getByRole("button", { name: "add-field" }))
    userEvent.click(screen.getByRole("button", { name: "add-field" }))
    expect(screen.getByText("Field 1")).toBeInTheDocument();
    expect(screen.getByText("Field 2")).toBeInTheDocument();
  })

  it("renders the Preview page", () => {
    renderWithRouter(<App />);

    userEvent.click(screen.getByText("Preview"))

    expect(screen.getByText("Please add some fields")).toBeInTheDocument();
  })

  it("saves form and persists form state to Preview and back to Create", () => {
    renderWithRouter(<App />, { initialEntries: ["/create"] });

    // Add field
    userEvent.click(screen.getByRole("button", { name: "add-field" }))

    // Fill in field info
    userEvent.selectOptions(
      screen.getByRole("combobox"),
      screen.getByRole("option", { name: "input" })
    )
    fillInTextFields()
    userEvent.click(screen.getByRole("button", { name: "save" }))

    // Switch to the Preview page and check that the user's field has rendered correctly
    userEvent.click(screen.getByText("Preview"))
    expect(screen.getByLabelText("Favourite sport")).toHaveAttribute("placeholder", "Tennis");

    // Submit form and check that correct json payload is displayed
    userEvent.paste(screen.getByLabelText("Favourite sport"), "Football")
    userEvent.click(screen.getByRole("button", { name: "save" }))
    expect(screen.getByText('{ "favourite-sport": "Football" }')).toBeInTheDocument();

    // Go back to Create to check that state has persisted
    userEvent.click(screen.getByText("Create"))
    expect(screen.getByText("Field 1")).toBeInTheDocument();
  })

  it("renders input based on selection in Preview", () => {
    renderWithRouter(<App />, { initialEntries: ["/create"] });

    // Add field
    userEvent.click(screen.getByRole("button", { name: "add-field" }))

    // Create textarea
    userEvent.selectOptions(
      screen.getByRole("combobox"),
      screen.getByRole("option", { name: "textarea" })
    )
    fillInTextFields()
    userEvent.click(screen.getByRole("button", { name: "save" }))

    // Go to Preview and check of existence of textarea
    userEvent.click(screen.getByText("Preview"))
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  })
})
