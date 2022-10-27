import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CoinGame from "./CoinGame";

beforeEach(function () {
  jest.spyOn(Math, "random").mockReturnValueOnce(0).mockReturnValueOnce(1);
});

afterEach(function () {
  Math.random.mockRestore();
});

// SMOKE TEST
test("should render", () => {
  render(<CoinGame />);
});

// SNAPSHOT TEST
test("should match snapshot", () => {
  const { asFragment } = render(<CoinGame />);
  expect(asFragment()).toMatchSnapshot();
});

it("works when the img is not there", function () {
  const { queryByTestId } = render(<CoinGame />);
  const coin_img = queryByTestId("coin_img");
  expect(coin_img).toBeNull();

  const flip_btn = queryByTestId("flip_btn");
  fireEvent.click(flip_btn);
  const coin_img_there = queryByTestId("coin_img");
  expect(coin_img_there).toHaveAttribute("src", "coin-Front.png");

  fireEvent.click(flip_btn);
  expect(coin_img_there).toHaveAttribute("src", "coin-Back.png");
});

it("works when the img is head/front (after one click)", function () {
  const { queryByTestId } = render(<CoinGame />);

  const flip_btn = queryByTestId("flip_btn");
  fireEvent.click(flip_btn);

  // not Null
  const coin_img = queryByTestId("coin_img");
  expect(coin_img).not.toBeNull();

  // Checking the src = coin-Front.png
  const coin_img_there = queryByTestId("coin_img");
  expect(coin_img_there).toHaveAttribute("src", "coin-Front.png");
});

it("works when the img is tail/back (after two click)", function () {
  const { queryByTestId } = render(<CoinGame />);

  const flip_btn = queryByTestId("flip_btn");
  fireEvent.click(flip_btn);
  fireEvent.click(flip_btn);

  // not Null
  const coin_img = queryByTestId("coin_img");
  expect(coin_img).not.toBeNull();

  // Checking the src = coin-Front.png
  const coin_img_there = queryByTestId("coin_img");
  expect(coin_img_there).toHaveAttribute("src", "coin-Back.png");
});
