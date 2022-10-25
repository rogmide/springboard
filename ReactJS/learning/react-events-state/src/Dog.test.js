import React from "react";
import { render, screen } from "@testing-library/react";
import Dog from "./Dog";

test("should render", () => {
  render(<Dog name="Rusty" isAdopted={true} />);
});

test("should match snapshot", () => {
  const { asFragment } = render(<Dog name="Rusty" isAdopted={true} />);
  expect(asFragment()).toMatchSnapshot();
});

test("should match snapshot", () => {
  const { asFragment } = render(<Dog name="Rusty" isAdopted={false} />);
  expect(asFragment()).toMatchSnapshot();
});
