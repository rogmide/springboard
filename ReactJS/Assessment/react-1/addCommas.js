// Part 2: addCommas
// Write a function called addCommas which accepts a number and converts it into a string formatted with commas added for readability.

// Examples of the output we’d like:

// Input	            Expected Output
// 1234	                “1,234”
// 1000000	            “1,000,000”
// 9876543210	        “9,876,543,210”
// 6	                “6”
// -10	                “-10”
// -5678	            “-5,678”
// (bonus) 12345.678	“12,345.678”
// (bonus) -3141592.65	“-3,141,592.65”
// Write tests for these (non-bonus) cases and make sure your code passes these. Feel free to add any other tests you deem necessary.

let num = "1234";
let num2 = "1000000";
let num3 = "9876543210";
let num4 = "6";
let num5 = "-10";
let num6 = "-5678";
let num7 = "12345.678";
let num8 = "-3141592.65";

// Making an Array of 3 items of length and returning it backward
// Sample
// input: "9876543210"
// outpust: Array[0] => [ [ '0', '1', '2' ], [ '3', '4', '5' ], [ '6', '7', '8' ], [ '9' ] ]
//          Array[1] => Hold the number after the dot
const threeNumSplit = (stringNum) => {
  let afterDot = stringNum.split(".");
  let tempArr = afterDot[0].split("").reverse();
  let result = [];
  while (tempArr.length > 0) {
    result.push(tempArr.splice(0, 3));
  }
  return [result, afterDot[1]];
};

function addCommas(num) {
  let result = "";
  let tempArr = threeNumSplit(num);

  let halfNum = tempArr[0]
    .reverse()
    .map((num) => num.reverse().join(""))
    .toString();

  result = halfNum + (tempArr[1] ? `.${tempArr[1]}` : "");
  console.log(result);
  return result;
}

addCommas(num);
addCommas(num2);
addCommas(num3);
addCommas(num4);
addCommas(num5);
addCommas(num6);
addCommas(num7);
addCommas(num8);

module.exports = addCommas;
