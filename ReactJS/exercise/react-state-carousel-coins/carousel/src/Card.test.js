import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";

// Smoke Test
test("should render without crashing", () => {
  render(<Card />);
});
