function addToArrImpure(arr, val) {
  arr.push(val);
  return arr;
}

function addToArrPure(arr, val) {
  return [...arr, val];
}

function addToObjImpure(obj, key, val) {
  obj[key] = val;
  return obj;
}

function addToObjPure(obj, key, val) {
  return { ...obj, [key]: val };
}

function doubleIMpure(nums) {
  nums.forEach((n, i) => (nums[i] *= 2));
  return nums;
}

function doublePure(nums) {
  return nums.map((num) => num * 2);
}
