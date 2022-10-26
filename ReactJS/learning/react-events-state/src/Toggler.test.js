import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Toggler from "./Toggler";

test("should toggle", () => {
  const { getByText } = render(<Toggler />);
  // Selecting the Element
  const heading = getByText("Hello World");

  // Using the element to test
  expect(heading).toHaveClass("Toggler-text");
  expect(heading).toBeInTheDocument();

  // Event Firering
  fireEvent.click(getByText("Toggle"));
  expect(heading).not.toBeInTheDocument();
});
