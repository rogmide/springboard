function reverse(str) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}

function reverse2(str) {
  return str.split("").reverse().join("");
}

// Add multiples Operation while the For is Running
// This loop is the size of N that can grow
// The number of operations is bounded by a multiple of n (say, 10n)
// This algorithm "run in" O(n)
// O(n)
function addUpToFrist(n) {
  let total = 0;

  for (let i = 0; i <= n; i++) {
    total += i;
  }

  return total;
}

// Only got 3 Operation
// Always 3 Operations Function is O(1)
// O(1)
function addUpToSec(n) {
  return (n * (n + 1)) / 2;
}

// This operation run a O(n) inside another O(n)
// This is very slow this operation runs on O(n^2)
// O(n^2)
function printAllPairs(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}

// this algorithm can stop in some cases like nums = [2,2,3]
// will stop at 3 is not a Even number,
// but we dont care we calculate de worst case esenario
function allEven(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 !== 0) {
      return false;
    }
  }
  return true;
}
