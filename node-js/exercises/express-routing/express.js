const express = require("express");
const customError = require("./customError");
const fs = require("fs");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let TODAY = new Date();

// ########################################################
// ROUTES
app.get("/", (req, res, next) => {
  return res.send("HomePage");
});

app.get("/mean", (req, res, next) => {
  try {
    let { nums, save = false } = req.query;
    if (!op_mean(nums)) next(erroNumber());
    let result = op_mean(nums);
    if (save === "true") {
      storeFileData(`Mean of ${nums}: "${result}" on ${use_Time()}`);
    }
    res.json(to_return("Mean", result));
  } catch (err) {
    next(err);
  }
});

app.get("/median", (req, res, next) => {
  try {
    let { nums, save = false } = req.query;
    result = op_median(nums);
    if (save === "true") {
      storeFileData(`Median of ${nums}: "${result}" on ${use_Time()}`);
    }
    return res.json(to_return("Media", result));
  } catch (error) {
    next(error);
  }
});

app.get("/mode", (req, res, next) => {
  try {
    let { nums, save = false } = req.query;
    let result = op_mode(nums);
    if (save === "true") {
      storeFileData(`Mode of ${nums}: "${result}" on ${use_Time()}`);
    }
    return res.json(to_return("Mode", result));
  } catch (error) {
    next(error);
  }
});

app.get("/all", (req, res, next) => {
  try {
    let { nums } = req.query;
    return res.json({
      response: {
        operation: "All",
        mean: op_mean(nums),
        median: op_median(nums),
        mode: op_mode(nums),
      },
    });
  } catch (error) {
    next(error);
  }
});

// ########################################################
// EXERCISE FUNCTIONS
function op_mean(nums) {
  nums = nums.split(",");
  let result = nums.reduce((acc, c) => acc + parseInt(c), 0) / nums.length;
  return result;
}

function op_median(nums) {
  nums = nums.split(",").sort((a, b) => a - b);
  middle = Math.floor(nums.length / 2);
  if (nums.length % 2 === 0) {
    let result = (parseInt(nums[middle - 1]) + parseInt(nums[middle])) / 2;
    return result;
  }
  return nums[middle];
}

function op_mode(nums) {
  nums = nums.split(",");
  let unique = [...new Set(nums)];
  nums = unique.map((v) => [v, nums.filter((str) => str === v).length]);
  result = nums.sort((a, b) => (a[1] > b[1] ? -1 : 0));
  return result[0][0];
}

// ########################################################
// HELPER FUNCTIONS
function to_return(op, result) {
  return {
    response: {
      operation: op,
      value: result,
    },
  };
}

function erroNumber() {
  const e = new customError("Enter Valid Numbers", 400);
  return e;
}

function storeFileData(data) {
  fs.appendFile("results.txt", `\n${data}`, "utf8", (err) => {
    if (err) {
      process.exit(1);
    } else {
      console.log(`Results.txt file updated`);
    }
  });
}

function use_Time() {
  let date =
    TODAY.getFullYear() + "-" + (TODAY.getMonth() + 1) + "-" + TODAY.getDate();
  let time =
    TODAY.getHours() + ":" + TODAY.getMinutes() + ":" + TODAY.getSeconds();
  return date + " at " + time;
}

// ########################################################
// ERROR HANDELER
app.use((req, res, next) => {
  const e = new customError("Page Not Found", 404);
  next(e);
});

app.use((err, req, res, next) => {
  let status = err.status || 500;
  let message = err.msg || "Default Msg";
  return res.status(status).json({ error: { message, status } });
});

// ########################################################
// app.listen should be always at end of the file
app.listen(3000, () => {
  console.log("App running on  http://127.0.0.1:3000/");
});

module.exports = {
  op_mean,
  op_median,
  op_mode,
};
