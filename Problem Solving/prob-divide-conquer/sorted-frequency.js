function sortedFrequency(arr, num) {
  let start = getStart(arr, num);
  if (start == -1) return start;
  let end = getEnd(arr, num);
  return arr.slice(start, end).length + 1;
}

function getStart(arr, val) {
  idxLeft = 0;
  idxRigh = arr.length - 1;
  let middle = Math.floor((idxLeft + idxRigh) / 2);

  while (idxRigh != -1) {
    middle = Math.floor((idxLeft + idxRigh) / 2);
    if ((middle === 0 || val > arr[middle - 1]) && arr[middle] === val) {
      return middle;
    } else if (val > arr[middle]) {
      if (middle + 1 === arr.length) {
        return -1;
      }
      idxLeft = middle + 1;
    } else {
      idxRigh = middle - 1;
    }
  }
  return -1;
}

function getEnd(arr, val) {
  idxLeft = 0;
  idxRigh = arr.length - 1;
  let middle = Math.floor((idxLeft + idxRigh) / 2);

  while (idxLeft != arr.length) {
    middle = Math.floor((idxLeft + idxRigh) / 2);
    if (
      (middle === arr.length - 1 || val < arr[middle + 1]) &&
      arr[middle] === val
    ) {
      return middle;
    } else if (val < arr[middle]) {
      if (middle + 1 === arr.length) {
        return -1;
      }
      idxRigh = middle - 1;
    } else {
      idxLeft = middle + 1;
    }
  }
  return -1;
}

console.log("Case1: ", sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2)); // 4
console.log("Case2: ", sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3)); // 1
console.log("Case3: ", sortedFrequency([1, 1, 2, 2, 2, 2, 3], 1)); // 2
console.log("Case4: ", sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4)); // -1
console.log("Case4: ", sortedFrequency([1, 2, 2, 3, 3, 4, 5], 2)); // -1

function getFreq(arr, val) {
  return arr.filter((item) => item === val).length != 0
    ? arr.filter((item) => item === val).length
    : -1;
}

console.log(getFreq([1, 1, 2, 2, 2, 2, 3], 2));
console.log(getFreq([1, 1, 2, 2, 2, 2, 3], 3));
console.log(getFreq([1, 1, 2, 2, 2, 2, 3], 1));
console.log(getFreq([1, 1, 2, 2, 2, 2, 3], 4));

module.exports = sortedFrequency;
