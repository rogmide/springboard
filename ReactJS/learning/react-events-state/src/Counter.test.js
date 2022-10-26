import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

test("it renders without crashing", () => {
  render(<Counter />);
});

test("it matches snapshot", () => {
  const { asFragment } = render(<Counter />);
  expect(asFragment()).toMatchSnapshot();
});

// SOME FOR OF TESTING OUR APPS
// test("playing with query", () => {
//   const {
//     getByText,
//     getAllByText,
//     queryByText,
//     getAllByPlaceholderText,
//     getByLabelText,
//   } = render(<Counter />);
//   console.log(getByText(`Count is:`, { exact: false }));
//   console.log(getAllByText(`Count`, { exact: false }));
//   console.log(queryByText(`Count`, { exact: false }));
//   console.log(getAllByPlaceholderText("username"));
// });

test("button increments counter", () => {
  const { getByText } = render(<Counter />);
  const h2 = getByText("Count is: 0");
  const btn1 = getByText("Add");
  const btn2 = getByText("Subtract");
  fireEvent.click(btn1);
  expect(h2).toHaveTextContent("10");
  fireEvent.click(btn2);
  expect(h2).toHaveTextContent("0");
});
