const fs = require("fs");
const axios = require("axios");

let my_path = "";

const [, , ...args] = process.argv;
if ([, , ...args].length === 3) my_path = [, , ...args][2];
if ([, , ...args][2] === "--out") my_path = [, , ...args].splice(2);

if (my_path[0] !== "--out") {
  my_path[0] === "h" ? webCat() : cat();
} else {
  my_path[2][0] === "h" ? webCat() : cat();
}

function cat() {
  if (my_path[0] !== "--out") {
    fs.readFile(my_path, "utf8", (err, data) => {
      if (err) {
        console.log("ERROR", err);
        process.exit(1);
      } else {
        console.log(data);
      }
    });
  } else {
    fs.readFile(my_path[2], "utf8", (err, data) => {
      if (err) {
        console.log("ERROR", err);
        process.exit(1);
      } else {
        fs.writeFile(my_path[1], data, "utf8", (err) => {
          if (err) {
            console.log("ERROR", err);
            process.exit(1);
          } else {
            console.log("It Works");
          }
        });
      }
    });
  }
}

async function webCat() {
  if (my_path[0] !== "--out") {
    try {
      const resp = await axios.get(my_path);
      console.log(resp.data);
    } catch (error) {
      console.log(error);
    }
  } else {
    try {
      const resp = await axios.get(my_path[2]);
      fs.writeFile(my_path[1], resp.data, "utf8", (err) => {
        if (err) {
          console.log("ERROR", err);
          process.exit(1);
        } else {
          console.log("It Works");
        }
      });
    } catch (error) {
      console.log(error);
    }
  }
}
