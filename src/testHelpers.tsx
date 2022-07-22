import { ReactNode } from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

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
