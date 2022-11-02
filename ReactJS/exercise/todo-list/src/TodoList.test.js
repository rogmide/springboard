import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";

it("render without crashing", function () {
  render(<TodoList />);
});

it("should match snapshot", () => {
  const { asFragment } = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});

it("should remove/add a new todo", () => {
  const { queryByText, getByLabelText, queryByTestId } = render(<TodoList />);

  // Selecting
  const input = getByLabelText("Todo:");
  const btnAddTodo = queryByText("Add Todo");

  // Make sure that a Box is on Screen
  const btnTrashCan = queryByTestId("todo_trash");
  expect(btnTrashCan).toBeInTheDocument();

  // Click and check that is not there anymore
  fireEvent.click(btnTrashCan);
  expect(btnTrashCan).not.toBeInTheDocument();

  // Setup Next Box Form to be added
  fireEvent.change(input, { target: { value: "New Todo Is Added" } });

  // Click to Add New Todo
  fireEvent.click(btnAddTodo);

  // Make sure that a new Todo is on Screen
  expect(queryByTestId("todo_trash")).toBeInTheDocument();
});
