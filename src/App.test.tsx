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
  it("renders the page and adds and removes Create Field boxes", () => {
    renderWithRouter(<App />);

    expect(screen.getByText("Please add some fields")).toBeInTheDocument();

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

  it("renders live preview", () => {
    renderWithRouter(<App />);

    // Add field
    userEvent.click(screen.getByRole("button", { name: "add-field" }))

    // Fill in field info
    userEvent.selectOptions(
      screen.getByRole("combobox"),
      screen.getByRole("option", { name: "input" })
    )
    fillInTextFields()
    userEvent.click(screen.getByRole("button", { name: "save" }))
    expect(screen.getByText("Saved")).toBeInTheDocument()

    // Check that the user's field has rendered correctly
    expect(screen.getByLabelText("Favourite sport")).toHaveAttribute("placeholder", "Tennis");

    // Submit form and check that correct json payload is displayed
    userEvent.paste(screen.getByLabelText("Favourite sport"), "Football")
    userEvent.click(screen.getByRole("button", { name: "submit" }))
    expect(screen.getByText('{ "favourite-sport": "Football" }')).toBeInTheDocument();

    // Change form and remove json
    userEvent.paste(screen.getByLabelText("Label"), "Favourite food")
    userEvent.click(screen.getByRole("button", { name: "save" }))
    expect(screen.queryByText('{ "favourite-sport": "Football" }')).not.toBeInTheDocument();
  })

  it("renders Require for required fields", () => {
    renderWithRouter(<App />);

    userEvent.click(screen.getByRole("button", { name: "add-field" }))

    expect(screen.getAllByPlaceholderText("Required")).toHaveLength(2)
  })

  it("removes options if remove button is clicked", () => {
    renderWithRouter(<App />);

    // Fill in form with two options
    userEvent.click(screen.getByRole("button", { name: "add-field" }))
    userEvent.selectOptions(
      screen.getByRole("combobox"),
      screen.getByRole("option", { name: "checkbox" })
    )
    userEvent.paste(screen.getByLabelText("Label"), "Favourite sport")
    userEvent.paste(screen.getByLabelText("Name"), "favourite-sport")
    userEvent.click(screen.getByRole("button", { name: "add-option" }))
    userEvent.paste(screen.getByLabelText("Option 1"), "Ketchup")
    userEvent.click(screen.getByRole("button", { name: "add-option" }))
    userEvent.paste(screen.getByLabelText("Option 2"), "Mustard")
    userEvent.click(screen.getByRole("button", { name: "save" }))

    // Go to Preview and check that both options are there
    expect(screen.getByLabelText("Ketchup")).toBeInTheDocument()
    expect(screen.getByLabelText("Mustard")).toBeInTheDocument()

    // Remove "Option 2" and check that it's gone from the Preview
    userEvent.click(screen.getAllByRole("button", { name: "remove-option" })[1])
    userEvent.click(screen.getByRole("button", { name: "save" }))
    userEvent.click(screen.getByText("Preview"))
    expect(screen.getByLabelText("Ketchup")).toBeInTheDocument()
    expect(screen.queryByLabelText("Mustard")).not.toBeInTheDocument()
  })
})
