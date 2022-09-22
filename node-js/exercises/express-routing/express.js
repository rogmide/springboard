const express = require("express");
// const ExpressError = require("./expressError");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res, next) => {
  return res.send("HomePage");
});

app.get("/mean", (req, res, next) => {
  let { nums } = req.query;
  nums = nums.split(",");
  return res.json(
    to_return(
      "Mean",
      nums.reduce((acc, c) => acc + parseInt(c), 0) / nums.length
    )
  );
});

app.get("/median", (req, res, next) => {
  let { nums } = req.query;
  nums = nums.split(",").sort((a, b) => a - b);
  middle = Math.floor(nums.length / 2);
  if (nums.length % 2 === 0)
    return res.json(
      to_return(
        "Media",
        (parseInt(nums[middle - 1]) + parseInt(nums[middle])) / 2
      )
    );
  return res.json(to_return("Media", nums[middle]));
});

app.get("/mode", (req, res, next) => {
  let { nums } = req.query;
  nums = nums.split(",");
  let unique = [...new Set(nums)];
  nums = unique.map((v) => [v, nums.filter((str) => str === v).length]);
  result = nums.sort((a, b) => (a[1] > b[1] ? -1 : 0));
  return res.json(to_return("Mode", result[0][0]));
});

function to_return(op, result) {
  return {
    response: {
      operation: op,
      value: result,
    },
  };
}

// app.use((err, req, res, next) => {});

// ########################################################
// app.listen should be always at end of the file
app.listen(3000, () => {
  console.log("App running on  http://127.0.0.1:3000/");
});
