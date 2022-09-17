const fs = require("fs");
const axios = require("axios");

const [, , ...args] = process.argv;
path = [, , ...args][2];

function cat() {
  fs.readFile(path, "utf8", (err, data) => {
    if (err) {
      console.log("ERROR", err);
      process.exit(1);
    } else {
      console.log(data);
    }
  });
}

async function webCat() {
  try {
    const resp = await axios.get(path);
    console.log(resp);
  } catch (error) {
    console.log(error);
  }
}

path[0] === "h" ? webCat() : cat();
