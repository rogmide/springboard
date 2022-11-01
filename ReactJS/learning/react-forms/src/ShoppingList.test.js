import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ShoppingList from "./ShoppingList";

it("render without crashing", function () {
  render(<ShoppingList />);
});

it("should match snapshot", () => {
  const { asFragment } = render(<ShoppingList />);
  expect(asFragment()).toMatchSnapshot();
});

it("should add a new item", () => {
  const { queryByText, getByLabelText } = render(<ShoppingList />);
  const input = getByLabelText("Product:");
  const btn = queryByText("Add Items");
  expect(queryByText("Product Name: Chocolate Milk")).not.toBeInTheDocument();
  // mocking a input on the app passing a obj
  fireEvent.change(input, { target: { value: "Chocolate Milk" } });
  fireEvent.click(btn);
  expect(queryByText("Product Name: Chocolate Milk")).toBeInTheDocument();
});
