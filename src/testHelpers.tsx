import { ReactNode } from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Form } from "react-final-form";

interface Options {
  initialEntries?: string[]
}

export const renderWithRouter = (component: ReactNode, options: Options = { initialEntries: ["/"] }) => {
  const { initialEntries } = options;
  return render(
    <MemoryRouter initialEntries={initialEntries}>
      {component}
    </MemoryRouter>
  )
}

export const renderWithForm = (component: ReactNode) => (
  render(
    <Form onSubmit={() => {}} render={() => (
      component
    )}>
    </Form>
  )
)
