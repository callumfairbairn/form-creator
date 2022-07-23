import { ReactNode } from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

export const renderWithRouter = (component: ReactNode) => {
  return render(
    <MemoryRouter initialEntries={["/"]}>
      {component}
    </MemoryRouter>
  )
}
