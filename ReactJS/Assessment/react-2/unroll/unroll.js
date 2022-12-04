// const square = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
//   [13, 14, 15, 16],
// ];

// const smallerSquare = [
//   ["a", "b", "c"],
//   ["d", "e", "f"],
//   ["g", "h", "i"],
// ];

let tempResult = [];

function spiralArrays(squareArray) {
  if (squareArray.length === 0) {
    return;
  }

  let fristA = squareArray[0];
  squareArray.shift();
  tempResult.push(fristA);
  let lastA = squareArray.pop();
  squareArray.map((lastItem) =>
    tempResult.push(lastItem.splice(lastItem.length - 1))
  );
  if (lastA) {
    tempResult.push(lastA.reverse());
  }
  squareArray
    .reverse()
    .map((fristItem) => tempResult.push(fristItem.splice(0, 1)));

  spiralArrays(squareArray.reverse());
}

const unroll = (arr) => {
  spiralArrays(arr);
  const result = tempResult.flat();
  tempResult = [];
  return result;
};

// console.log(unroll(square));
// console.log(unroll(square));

module.exports = unroll;
