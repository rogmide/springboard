import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BoxList from "./BoxList";

it("render without crashing", function () {
  render(<BoxList />);
});

it("should match snapshot", () => {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});

// try get by test ID test-box
it("should add a new box", () => {
  const { queryByText, getByLabelText } = render(<BoxList />);
  const inputWidth = getByLabelText("Width:");
  const inputHeight = getByLabelText("Height:");
  const inputBackColor = getByLabelText("Background Color:");
  const btn = queryByText("Add Box");

  const btn1 = queryByText("X");
  expect(queryByText("X")).toBeInTheDocument();
  expect(queryByText("X")).toHaveStyle({ backgroundColor: "green" });

  fireEvent.click(btn1);
  expect(queryByText("X")).not.toBeInTheDocument();

  // mocking a input on the app passing a obj
  fireEvent.change(inputWidth, { target: { value: "100" } });
  fireEvent.change(inputHeight, { target: { value: "100" } });
  fireEvent.change(inputBackColor, { target: { value: "red" } });
  fireEvent.click(btn);
  expect(queryByText("X")).toBeInTheDocument();
  //   expect(queryByText("X")).toHaveStyle("background-color: red");
});
