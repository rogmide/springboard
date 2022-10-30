import React, { useState } from "react";
import Cell from "./Cell";
import "./Board.css";
import randomTrueFalse from "./helpers";

// Winning Strategy
// Go left to Right
// 1 lit 4 and 5 top
// 2 lit 2 and 5 top
// 3 lit 4 top

/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

function Board({ nrows, ncols }) {
  const [board, setBoard] = useState(createBoard());

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */
  function createBoard() {
    let initialBoard = [];

    // TODO: create array-of-arrays of true/false values
    for (let i = 0; i < nrows; i++) {
      let row = Array.from({ length: ncols });
      row = row.map((light) => (light = randomTrueFalse()));
      initialBoard.push(row);
    }
    return initialBoard;
  }

  function hasWon() {
    // TODO: check the board in state to determine whether the player has won.
    return board.every((row) => row.every((cell) => cell));
  }

  function flipCellsAround(coord) {
    setBoard((oldBoard) => {
      const [y, x] = coord.split("-").map(Number);
      const flipCell = (y, x, boardCopy) => {
        // if this coord is actually on board, flip it
        if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
          boardCopy[y][x] = !boardCopy[y][x];
        }
      };

      if (hasWon()) {
        alert("Winner, Winner Chicken Dinner");
      }

      // TODO: Make a (deep) copy of the oldBoard
      // ReactJS is very piky, need to change the STATE other wise will never re-render
      // Had to look the next line of code bcz this dont work
      // const boardCopy = [...oldBoard]
      // that work for the first time i click but not for the other click do that
      // what is inside boardCopy never change is the same reference
      // doing this -- oldBoard.map((row) => [...row]) -- is macking change on the deep lvl of the array
      // Fucking Brilliant miss that :)

      let boardCopy = oldBoard.map((row) => [...row]);
      // TODO: in the copy, flip this cell and the cells around it
      flipCell(y, x, boardCopy);
      flipCell(y, x + 1, boardCopy);
      flipCell(y, x - 1, boardCopy);
      flipCell(y + 1, x, boardCopy);
      flipCell(y - 1, x, boardCopy);
      // TODO: return the copy
      return boardCopy;
    });
  }

  // if the game is won, just show a winning msg & render nothing else

  // TODO

  // make table board

  return (
    <div className="Board">
      {board.map((r, y) => (
        // Math.random() for the key for now, so dont yill at me
        <div key={Math.random() * 1000000} className="Board_Row_Holder">
          {" "}
          {r.map((c, x) => (
            <Cell
              key={Math.random() * 1000000}
              isLit={c}
              flipCellsAroundMe={() => {
                flipCellsAround(`${y}-${x}`);
              }}
            />
          ))}{" "}
        </div>
      ))}
    </div>
  );

  // TODO
}

// DEFAULT PROPS
Board.defaultProps = {
  nrows: 3,
  ncols: 3,
};

export default Board;
