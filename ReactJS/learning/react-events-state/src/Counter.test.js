import React from "react";
import { render, screen } from "@testing-library/react";
import Counter from "./Counter";

test("it renders without crashing", () => {
  render(<Counter />);
});

test("it matches snapshot", () => {
  const { asFragment } = render(<Counter />);
  expect(asFragment()).toMatchSnapshot();
});
