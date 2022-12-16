import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import LoginForm from "./LoginForm";

// SNAPSHOT TEST
test("should match snapshot", () => {
  const { asFragment } = render(
    <MemoryRouter>
      <LoginForm />
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
