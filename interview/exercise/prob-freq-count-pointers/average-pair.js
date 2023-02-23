// add whatever parameters you deem necessary
function averagePair(nums, avgTarget) {
  let leftPointer = 0;
  let rightPointer = nums.length - 1;
  while (leftPointer < rightPointer) {
    const sum = nums[leftPointer] + nums[rightPointer];
    if (sum === avgTarget) {
      return true;
    } else if (sum > avgTarget) {
      rightPointer--;
    } else {
      leftPointer++;
    }
  }
  return false;
}

console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));

module.exports = averagePair;
