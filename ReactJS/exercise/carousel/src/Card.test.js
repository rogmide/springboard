import React from "react";
import { render, screen } from "@testing-library/react";
import Card from "./Card";

// SMOKE TEST
test("should render", () => {
  render(<Card />);
});

// SNAPSHOT TEST
test("should match snapshot", () => {
  const { asFragment } = render(<Card />);
  expect(asFragment()).toMatchSnapshot();
});
