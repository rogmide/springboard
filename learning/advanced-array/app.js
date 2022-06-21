const color = ['teal', 'cyan', 'peach', 'purple'];

//color.forEach(function (VALUE, INDEX, THE ARRAY)
color.forEach(function (val, i) {
    console.log(val + " " + i);
});

function conLog(x, i) {
    console.log(x + " " + "index of: " + i);
}

function myForEach(arr, func) {
    arr.forEach(function (e, i) {
        func(e, i);
    });
}

let numbers = [1, 2, 3];


const num = numbers.map(function (value, index, array) {
    return value * 10;
});

const double = numbers.map(function (val) {
    return val * 2;
});


function myMap(arr, callback) {
    const mapArray = [];
    for (let i = 0; i < arr.length; i++) {
        mapArray.push(callback(arr[i]));
    }
    return mapArray;
}

let letters = ["a", "b", "c", "b", "c"];

const fil = letters.filter(function (value, index, array) {
    return value === "b";
});

function myFilder(arr, callback) {
    const filrteredArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            filrteredArray.push(arr[i]);
        }
    }
    return filrteredArray;
}

const b = myFilder(letters, function (letter) {
    return letter === "b";
});