/** product: calculate the product of an array of numbers. */

function product(nums, i = 0) {
  if (i === nums.length) return 1;
  return nums[i] * product(nums, i + 1);
}

// console.log(product([2, 3, 4]));

/** longest: return the length of the longest word in an array of words. */

function longest(words, i = 0, long = 0) {
  if (words.length === 1) return words[i].length;
  if (i === words.length - 1) return long;
  if (words[i].length >= words[i + 1].length) {
    long = words[i].length > long ? words[i].length : long;
  }
  return longest(words, i + 1, long);
}

// console.log(longest(["hello", "hiafsadfasdf", "hola"]));
// console.log(longest(["abcdefg", "hijklmnop", "qrs", "tuv", "wx", "y", "z"]));

/** everyOther: return a string with every other letter. */

function everyOther(str, i = 0) {
  if (str.length === 2) return str[0];
  if (str.length <= i) return "";
  return (str[i] += everyOther(str, i + 2));
}

// console.log(everyOther("banana stand")); // "bnn tn"
// console.log(everyOther("ddoouubbllee")); // "double"
// console.log(everyOther("hi")); // "h"

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, wordBackwards = "", i = str.length - 1) {
  if (wordBackwards.length === str.length) return wordBackwards === str;
  if (str.length != wordBackwards.length)
    return isPalindrome(str, (wordBackwards += str[i]), i - 1);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i = 0) {
  if (arr[i] === val) return i;
  if (arr.length === i) return -1;
  return findIndex(arr, val, i + 1);
}

/** revString: return a copy of a string, but in reverse. */

// Similar how i did isPalindrome just returning the word
function revString(str, wordBackwards = "", i = str.length - 1) {
  if (wordBackwards.length === str.length) return wordBackwards;
  if (str.length != wordBackwards.length)
    return revString(str, (wordBackwards += str[i]), i - 1);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj, strs = []) {
  if (Object.keys(obj).length === 0) return strs;

  if (typeof obj[Object.keys(obj)[0]] === "string") {
    strs.push(obj[Object.keys(obj)[0]]);
    delete obj[Object.keys(obj)[0]];
    return gatherStrings(obj, strs);
  } else {
    delete obj[Object.keys(obj)[0]];
    return gatherStrings(obj, strs);
  }
}
let whiskey = {
  name: "Whiskey",
  age: 5,
  favFood: "popcorn",
  color: "black",
  barks: false,
};

console.log(gatherStrings(whiskey));

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, IdxLeft = 0, IdxRight = arr.length) {
  if (IdxLeft > IdxRight) {
    return -1;
  }
  let middle = Math.floor((IdxLeft + IdxRight) / 2);
  if (arr[middle] === val) {
    return middle;
  }
  if (arr[middle] > val) {
    return binarySearch(arr, val, IdxLeft, middle - 1);
  }
  return binarySearch(arr, val, middle + 1, IdxRight);
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
};
