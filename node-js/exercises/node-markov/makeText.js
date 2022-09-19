/** Command-line tool to generate Markov text. */
const fs = require("fs");
const axios = require("axios");
const MarkovMachine = require("./markov.js");

const [, , ...args] = process.argv;
path = [, , ...args][3];
cmd = [, , ...args][2];
text_local = "text_file.txt";
url_local = "url_file.txt";

function file_() {
  fs.readFile(path, "utf8", (err, data) => {
    if (err) {
      console.log("ERROR", err);
      process.exit(1);
    } else {
      let mm_data = new MarkovMachine(data);
      storeFileData(path, mm_data.makeText(10), text_local);
    }
  });
}

async function url_() {
  try {
    const resp = await axios.get(path);
    let mm_data = new MarkovMachine(resp.data);
    storeFileData(path, mm_data.makeText(10), url_local);
  } catch (error) {
    console.log(error);
  }
}

function storeFileData(path, data, storePath) {
  fs.appendFile(storePath, `\n${data}`, "utf8", (err) => {
    if (err) {
      console.log("ERROR", err);
      process.exit(1);
    } else {
      console.log(`Generated text from file ${path}`);
    }
  });
}

if (cmd === "url") url_();
if (cmd === "file") file_();
