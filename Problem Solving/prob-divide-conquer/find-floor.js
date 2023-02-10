function findFloor(arr, val) {
  idxLeft = 0;
  idxRigh = arr.length - 1;
  let middle = Math.floor((idxLeft + idxRigh) / 2);

  while (idxRigh != -1) {
    middle = Math.floor((idxLeft + idxRigh) / 2);

    if (arr[middle] < val) {
      if (arr[middle] < val && arr[middle + 1] > val) {
        return arr[middle];
      }
      idxLeft = middle + 1;
    } else {
      idxRigh = middle - 1;
    }

    if (arr[arr.length - 1] <= val) return arr[arr.length - 1];
    if (middle === 0) return -1;
  }
}

console.log("Case1: ", findFloor([1, 2, 8, 10, 10, 12, 19], 9)); // 8
console.log("Case2: ", findFloor([1, 2, 8, 10, 10, 12, 19], 20)); // 19
console.log("Case3: ", findFloor([1, 2, 8, 10, 10, 12, 19], 0)); // -1

module.exports = findFloor;
