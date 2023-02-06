// Divide and Conquer
// Will be Using this in the Future
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
