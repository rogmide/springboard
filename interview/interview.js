function charCount(str) {
  // create empty obj to hold char counts
  // loop over each char in str
  // if char is letter or number
  // if char is in obj add 1 to count
  // otherwise add to obj and set count to 1

  // return obj with character counts
  // Go back and try to make your code better ones is working

  const obj = {};
  for (let char of str) {
    if (/[A-Z0-9]/i.test(char)) {
      char = char.toLowerCase();
      obj[char] = obj[char] + 1 || 1;
    }
  }
  return obj;
}

function squares(nums1, nums2) {
  if (nums1.length !== nums2.length) return false;
  for (let i = 0; i < nums1.length; i++) {
    let idx = nums2.indexOf(nums1[i] ** 2);
    if (idx === -1) return false;
    nums2.splice(idx, 1);
  }
  return true;
}

function makeFreqCounter(arr) {
  const freeCounter = {};
  for (let el of arr) {
    freeCounter[el] = freeCounter[el] + 1 || 1;
  }
  return freeCounter;
}

function square_v2(num1, num2) {
  if (num1.length !== num2.length) return false;
  const num1Freq = makeFreqCounter(num1);
  const num2Freq = makeFreqCounter(num2);
  console.log(num1Freq, num2Freq);
  for (const key in num1Freq) {
    if (!num2Freq[key ** 2]) return false;
    if (num1Freq[key] !== num2Freq[key ** 2]) return false;
  }
  return true;
}

// console.log(makeFreqCounter([2, 2, 2, 4, 6, 2]));

// console.log(squares([1, 2, 3], [4, 1, 9]));
// console.log(squares([1, 2, 3], [4, 9]));
// console.log(squares([1, 2, 1], [4, 4, 1]));

// console.log(charCount("heLLo 567 67 76 dffHfhd!!"));

// console.log(square_v2([1, 2, 3], [4, 1, 9]));

function isValidAnagram(str1, str2) {
  return str1.split("").sort().join("") === str2.split("").sort().join("");
}

function createFrequencyCounter(str) {
  let frequencies = new Map();
  for (const val of str) {
    let valCount = frequencies.get(val) || 0;
    frequencies.set(val, valCount + 1);
  }
  return frequencies;
}

function isValidAnagram_v2(str1, str2) {
  if (str1.length !== str2.length) return false;
  const charMap1 = createFrequencyCounter(str1);
  const charMap2 = createFrequencyCounter(str2);
  console.log(charMap1, charMap2);
  if (charMap1.size !== charMap2.size) return false;
  for (const letter of charMap1.keys()) {
    if (charMap2.get(letter) !== charMap1.get(letter)) return false;
  }
  return true;
}

// console.log(isValidAnagram("bat", "tab"));
// console.log(isValidAnagram_v2("bat", "tab"));

function zumZero(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) return undefined;
    for (let j = i + 1; j < nums.length; j++) {
      console.log(nums[i], nums[j]);
      if (nums[i] + nums[j] === 0) {
        return [nums[i], nums[j]];
      }
    }
  }
  return undefined;
}

// console.log(zumZero([-3, -2, 0, 1, 7, 9]));

// [-30, -21, -10, -5, -3, -2, -1, 0, 3, 6, 99]
function zumZeroMultiplePointers(nums) {
  let leftPointer = 0;
  let rightPointer = nums.length - 1;
  while (leftPointer < rightPointer) {
    console.log(nums[leftPointer], nums[rightPointer]);
    const sum = nums[leftPointer] + nums[rightPointer];
    if (sum === 0) {
      return [nums[leftPointer], nums[rightPointer]];
    } else if (sum > 0) {
      rightPointer--;
    } else {
      leftPointer++;
    }
  }
}
let nums = [
  -12, -4, -3, -2, -1, 0, 1, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17,
];
console.log(zumZeroMultiplePointers(nums));
