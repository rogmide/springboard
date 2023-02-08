// O(log N)
function countZeroes(arr) {
  // O(n)
  // return arr.filter((e) => e === 0).length;

  let IdxLeft = 0;
  let IdxRight = arr.length - 1;

  while (IdxLeft <= IdxRight) {
    let IdxMiddle = Math.floor((IdxLeft + IdxRight) / 2);
    let middleVal = arr[IdxMiddle];

    if (middleVal === 0) {
      IdxRight = IdxMiddle - 1;
    } else if (middleVal === 0 && arr[IdxLeft - 1] === 0) {
      IdxRight = IdxMiddle - 1;
    } else if (middleVal === 1 && arr[IdxLeft + 1] === 1) {
      IdxLeft = IdxMiddle + 1;
    } else {
      arr = arr.splice(IdxLeft + 1);
      return arr.length;
    }
  }
  return arr.length;
}

console.log(countZeroes([1, 1, 1, 1, 0, 0]));
console.log(countZeroes([1, 0, 0, 0, 0]));
console.log(countZeroes([0, 0, 0]));
console.log(countZeroes([1, 1, 1, 1]));

module.exports = countZeroes;
