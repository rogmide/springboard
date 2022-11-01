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
it("should remove/add a new box", () => {
  const { queryByText, getByLabelText } = render(<BoxList />);

  // Selecting
  const inputWidth = getByLabelText("Width:");
  const inputHeight = getByLabelText("Height:");
  const inputBackColor = getByLabelText("Background Color:");
  const btnAddBox = queryByText("Add Box");

  // Make sure that a Box is on Screen
  const btn1H3 = queryByText("X");
  expect(queryByText("X")).toBeInTheDocument();
  expect(queryByText("X").closest("div")).toHaveStyle({
    backgroundColor: "green",
    width: "100px",
    height: "100px",
  });

  // Click the X on the box and get remove
  fireEvent.click(btn1H3);
  expect(queryByText("X")).not.toBeInTheDocument();

  // Setup Next Box Form to be added
  fireEvent.change(inputWidth, { target: { value: "150" } });
  fireEvent.change(inputHeight, { target: { value: "150" } });
  fireEvent.change(inputBackColor, { target: { value: "red" } });

  // Click to Add Box
  fireEvent.click(btnAddBox);

  // Make sure that a new Box is on Screen
  expect(queryByText("X")).toBeInTheDocument();
  expect(queryByText("X").closest("div")).toHaveStyle({
    backgroundColor: "red",
    width: "150px",
    height: "150px",
  });
});
