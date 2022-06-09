
// user = {
//     //firstName: 'pepe',
//     //lastName: 'smith'
// };

// function displayInitials(user) {
//     let firstNameLetter;
//     let lastNameLetter;
//     try {
//         firstNameLetter = user.firstName[0].toUpperCase();
//         lastNameLetter = user.lastName[0].toUpperCase();
//     } catch (e) {
//         return "Invalid input!" + e;
//     }
//     return `Hello ${firstNameLetter}.${lastNameLetter}`;
// }

// console.log(displayInitials(user));

// console.log("an error is coming....");

// try {
//     throw "Oh no!";
// } catch (err) {
//     console.log("what happened?", err);
// }

// console.log("an error is coming....");

// try {
//   throw new Error("Oh no!");
// } catch (err) {
//   console.log("what kind of error?", err.name);
//   console.log("what is the message?", err.message);
//   console.log("where did it happen?", err.stack);
// }

// try {
//     undefined(); // this will throw a TypeError
// } catch (err) {
//     console.log("something went wrong!", err.name);
// } finally {
//     console.log("we're all done!");
// }

function markWahlberg(animal, callback) {
    console.log(`Hey ${animal}, how you doin'?`);
    callback();
}

function marksCallback() {
    console.log('Say hi to your mother for me, alright?');
}

//markWahlberg("pepe", marksCallback);

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}


function doMath(a, b, callback) {
    return callback(a, b)
}

// console.log(doMath(5, 5, add));
// console.log(doMath(5, 5, subtract));

function greet() {
    console.log("Hi!!, I LOVE YOU");
}


function repeatThreeTimes(func) {
    func();
    func();
    func();
}

function diss() {
    console.log("you are the worst :(");
}

function repeat(num, func) {
    for (let i = 0; i < num; i++) {
        func();
    }
}

//repeat(5, greet);
// repeat(5, diss);


let funcs = [greet, diss];

const myFunc = function add(x, y) {
    return x + y;
}

function giveBirth() {
    return function cry() {
        return "WAAAAAAAAAH";
    }
}

//const quad = makeMultiplyFunc(4);
//const double = makeMultiplyFunc(2)

function makeMultiplyFunc(num) {
    return function mult(x) {
        return num * x;
    }
}

//single threaded!

// greet();
// alert("you can keep going ");
// diss();

// greet();
// setTimeout(diss, 3000);
// setTimeout(diss, 1000);
// greet();

// const id = setInterval(diss, 2000);

// greet();
// setTimeout(function () {
//     diss(); 
//     diss();
//     diss();
// }, 1000);
// greet();


// setTimeout(function () {
//     console.log("asd");
//     console.log("asdasd");
//     console.log("asdasdasd");
// }, 3000);


// function doTwice(func) {
//     func();
//     func();
// }

// doTwice(function(){
//     console.log("stop stop ");
//     console.log("go away ");
// });


// const id = function () {
//     return "something";
// }

