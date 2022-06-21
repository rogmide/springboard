const color = ['teal', 'cyan', 'peach', 'purple'];

//color.forEach(function (VALUE, INDEX, THE ARRAY)
color.forEach(function (val, i) {
    // console.log(val + " " + i);
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


let numbers1 = [1, 2, 3];

const num1 = numbers1.some(function (value, index, array) {
    return value < 3;
});

let numbers2 = [1, 2, 3];

const num2 = numbers2.some(function (value, index, array) {
    return value > 10;
});

//THIS HOW IT WORK !!!SOME!!!
// function some(array, callback){
//     for(let i = 0; i < array.length; i++){
//       if(callback(array[i], i, array) === true){
//         return true;
//       }
//     }
//     return false;
//   }

function hasAdmin(arr) {
    return arr.some(function (value) {
        return value.admin
    });
}

function hasQuestionMark(str) {
    return str.split('').some(function (value) {
        return value === '?';
    });
}

//THIS HOW IT WORK !!!EVERY!!!
/*
function every(array, callback){
  for(let i = 0; i < array.length; i++){
    if(callback(array[i], i, array) === false){
      return false;
    }
  }
  return true;
} */

let numbers3 = [1,2,3];

const num3 = numbers3.every(function(value, index, array){
  return value > 0;
});

// true
let numbers4 = [1,2,3];

const num4 = numbers4.every(function(value, index, array){
  return value > 2;
});

/*
some iterates through an array and runs a callback on each value,
if the callback for at least one value returns true, some returns true, otherwise false
every iterates through an array and runs a callback on each value,
if the callback at any time returns false, every returns false
*/

function hasNoDuplicates(arr) {
    return arr.some((element, index) => {
        return arr.indexOf(element) !== index;
    });
}