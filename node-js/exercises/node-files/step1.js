const fs = require("fs");

function cat() {
    const [ , , ...args ] = process.argv
    path = [ , , ...args ][2]
    fs.readFile(path, "utf8", (err, data) => {
      if (err) {
        console.log("ERROR", err);
        process.exit(1);
      } else {
        console.log(data);
      }
    });
}

cat()


