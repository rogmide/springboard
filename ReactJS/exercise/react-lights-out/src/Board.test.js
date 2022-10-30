import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Board from "./Board";

// SMOKE TEST
test("should render", () => {
  render(<Board />);
});

// SNAPSHOT TEST
// test("should match snapshot", () => {
//   const { asFragment } = render(<Board />);
//   expect(asFragment()).toMatchSnapshot();
// });
