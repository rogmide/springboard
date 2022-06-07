
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

try {
    undefined(); // this will throw a TypeError
} catch (err) {
    console.log("something went wrong!", err.name);
} finally {
    console.log("we're all done!");
}