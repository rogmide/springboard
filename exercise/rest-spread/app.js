function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function (num) {
        return num % 2 === 0
    });
}

function filterOutOdds2() {
    const nums = [...arguments];
    return nums.filter((num) => num % 2 === 0);
}

function findMin() {
    const nums = [...arguments];
    return nums.reduce((num, NextNum) => num < NextNum ? num : NextNum);
}

const a = {
    a: 1,
    b: 2
};
const b = {
    c: 3,
    d: 4
}

function mergeObjects(a, b) {
    return { ...a, ...b }
}

function doubleAndReturnArgs(arr, ...args) {
    return [...arr].concat(args.map((val) => {
        return val * 2;
    }))
}

function removeRandom(items) {
    let i = Math.floor(Math.random() * items.length);
    return [...items.slice(0, i), ...items.slice(i + 1)];
}

const extend = (arr1, arr2) => { return [...arr1, ...arr2] }

function addKeyVal(obj, key, val) {
    return { ...obj, [key]: val }
}

const removeKey = (obj, key) => {
    delete obj[key]
    return { ...obj }
}


const combine = (obj1, obj2) => {
    return { ...obj1, ...obj2 };
}

function update(obj, key, val) {
    return { ...obj, [key]: val }
}