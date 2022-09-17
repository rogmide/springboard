const axios = require("axios");
const fs = require("fs");
const helper = require("./helper");
const { add, sub } = require("./helper");

// console.log(add(22, 45));
// console.log(sub(46, 45));

// fs.readFile("poem.txt", "utf8", (err, data) => {
//   if (err) {
//     console.log("ERROR", err);
//     process.exit(1);
//   } else {
//     console.log(data);
//   }
// });

const line = "And Eternity in an hour";
// const line = "To see a World in a Grain of Sand And a Heaven in a Wild Flower Hold Infinity in the palm of your hand";

// fs.writeFile("poem.txt", line, { encoding: "utf8", flag: "a" }, (err) => {
//   if (err) {
//     console.log("ERROR", err);
//     process.exit(1);
//   } else {
//     console.log("It Works");
//   }
// });

fs.appendFile("poem.txt", "\nAPPEND ME!!!", 'utf8', (err) => {
  if (err) {
    console.log("ERROR", err);
    process.exit(1);
  } else {
    console.log("It Works");
  }
});
