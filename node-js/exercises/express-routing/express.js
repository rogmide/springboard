const express = require("express");
const customError = require("./customError");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ########################################################
// ROUTES
app.get("/", (req, res, next) => {
  return res.send("HomePage");
});

app.get("/mean", (req, res, next) => {
  try {
    let { nums } = req.query;
    if (!op_mean(nums)) next(erroNumber());
    res.json(to_return("Mean", op_mean(nums)));
  } catch (err) {
    next(err);
  }
});

app.get("/median", (req, res, next) => {
  try {
    let { nums } = req.query;
    return res.json(to_return("Media", op_median(nums)));
  } catch (error) {
    next(error);
  }
});

app.get("/mode", (req, res, next) => {
  try {
    let { nums } = req.query;
    return res.json(to_return("Mode", op_mode(nums)));
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
