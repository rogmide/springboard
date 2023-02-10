function findRotationCount(arr) {
  idxLeft = 0;
  idxRigh = arr.length - 1;
  let middle = Math.floor((idxLeft + idxRigh) / 2);

  while (idxRigh != -1) {
    middle = Math.floor((idxLeft + idxRigh) / 2);
    console.log(middle, arr[middle - 1], arr[middle]);

    if (arr[middle - 1] > arr[middle]) {
      return middle;
    } else {
      idxLeft = middle + 1;
    }
    if (idxLeft === arr.length) return 0;
    idxLeft = middle + 1;
  }
}

console.log("Case1: ", findRotationCount([15, 18, 2, 3, 6, 12])); // 2
console.log("Case2: ", findRotationCount([7, 9, 11, 12, 5])); // 4
console.log("Case3: ", findRotationCount([7, 9, 11, 12, 15])); // 0

module.exports = findRotationCount;
