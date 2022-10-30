import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Cell from "./Cell";

// SMOKE TEST
test("should render", () => {
  render(<Cell />);
});

// SNAPSHOT TEST
test("should match snapshot", () => {
  const { asFragment } = render(<Cell />);
  expect(asFragment()).toMatchSnapshot();
});
