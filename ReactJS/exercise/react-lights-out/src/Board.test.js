import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Board from "./Board";

/* 

BeforeEach 
    I have to Mock Board to have a default Game so i can tested
    spend time trying to find how to mock a component no luck
    
    with the componet mock and can easy do the last 3 test

    rendering the starter Board: you could write this as a snapshot test, but you’d need to make sure the initial board configuration was predictable in the tests. How could you do that?
    handling cell-clicking: this is harder test, but has the most value. You’ll need to do a non-shallow render of the Board, then find a cell, and ensure that clicking it causes the right cells to flip.
    checking for a win and showing a “You won!” message.

    Will come back to this in the future
*/

// SMOKE TEST
test("should render", () => {
  render(<Board />);
});

// SNAPSHOT TEST
// test("should match snapshot", () => {
//   const { asFragment } = render(<Board />);
//   expect(asFragment()).toMatchSnapshot();
// });

it("works when you click on a cell and check for win", function () {
  const { queryByTestId } = render(<Board />);

  //   const whatClass = document.querySelector('[data-testid="0_0"]');
  //   whatClass.classList.remove("Cell-lit");
  //   const firstCell1 = queryByTestId("0_0");
  //   fireEvent.click(firstCell1);
  //   const Cell1Changed = queryByTestId("0_0");
  //   expect(Cell1Changed).toHaveClass("Cell Cell-lit");
});
