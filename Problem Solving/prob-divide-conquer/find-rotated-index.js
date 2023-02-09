function findRotatedIndex(arr, val) {
  idxLeft = 0;
  idxRigh = arr.length - 1;
  let middle = Math.floor((idxLeft + idxRigh) / 2);
  let centerSplit = 0;
  let leftArr = [];

  while (idxRigh != -1) {
    middle = Math.floor((idxLeft + idxRigh) / 2);
    if (arr[middle] > arr[middle + 1]) {
      centerSplit = middle;
      leftArr = arr.slice(0, middle + 1);
      if (val >= arr[0]) {
        arr = arr.slice(0, middle + 1);
        return binarySearch_v2(arr, val);
      } else {
        arr = arr.slice(middle + 1, arr.length);
        return binarySearch_v2(arr, val) + leftArr.length;
      }
    }
    if (middle === 0) return -1;
    idxRigh = middle - 1;
  }
}

function binarySearch_v2(arr, val) {
  let IdxLeft = 0;
  let IdxRight = arr.length - 1;

  while (IdxLeft <= IdxRight) {
    let IdxMiddle = Math.floor((IdxLeft + IdxRight) / 2);
    let middleVal = arr[IdxMiddle];

    if (middleVal < val) {
      IdxLeft = IdxMiddle + 1;
    } else if (middleVal > val) {
      IdxRight = IdxMiddle - 1;
    } else {
      return IdxMiddle;
    }
  }
  return -1;
}

console.log("Case1: ", findRotatedIndex([3, 4, 1, 2], 4)); // 1
console.log("Case2: ", findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8)); // 2
console.log("Case3: ", findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3)); // 6
console.log("Case4: ", findRotatedIndex([37, 44, 66, 102, 10, 22], 14)); // -1
console.log("Case5: ", findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12)); // -1

module.exports = findRotatedIndex;
