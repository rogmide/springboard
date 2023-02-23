// add whatever parameters you deem necessary
function constructNote(str1, str2) {
  let freq1 = makeFreqCounter(str1);
  let freq2 = makeFreqCounter(str2);
  console.log(freq1, freq2);
  for (const key in freq1) {
    if (!freq2[key]) return false;
    if (freq1[key] > freq2[key]) return false;
  }
  return true;
}

function makeFreqCounter(arr) {
  const freqCounter = {};
  for (let el of arr) {
    freqCounter[el] = freqCounter[el] + 1 || 1;
  }
  return freqCounter;
}

let str1Test = "skbjjjvnnd";
let str2Test = "fdjlkjfeburevjvnfnjckjncjdnchbechbadhd";

console.log(constructNote(str1Test, str2Test));

module.exports = constructNote;
