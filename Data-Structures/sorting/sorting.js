// Optomize good when the arr is almost sorted
function bubbleSort3(arr) {
  for (let i = 0; i < arr.length; i++) {
    let swapped = false;
    for (let j = 0; j < arr.length - i; j++) {
      console.log(arr);
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return arr;
}

// Both Array has to be Sorted
function merge(arr1, arr2) {
  const result = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }
  console.log(result);
  return result;
}

// bubbleSort3([45, 6, 7, 23, 1, 19]);
// mergeSort([1, 3, 8, 10, 15], [2, 2, 2, 4, 5, 6]);

function mergeSort(arr) {
  // base case
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  console.log("Left: ", left, "Right: ", right);
  return merge(left, right);
}

mergeSort([4, 45, 67, 1, -9, 99, 23, 24, 77, 100]);
