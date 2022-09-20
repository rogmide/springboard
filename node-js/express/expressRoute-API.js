const express = require("express");
const ExpressError = require("./expressError");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const CANDIES = [
  { name: "snikers", qty: 43, price: 1.5 },
  { name: "skittles", qty: 26, price: 0.99 },
];

// ########################################################
// GIVING A ARRAY OR OBJECT RES.SEND WILL MAKE IT A JSON RES
app.get("/candies", (req, res) => {
  //   res.send(CANDIES);
  res.json(CANDIES);
});

app.post("/candies", (req, res) => {
  if (req.body.name === "something")
    throw new ExpressError("Bad Candy Sorry", 403);

  CANDIES.push(req.body);
  res.status(201).json(CANDIES);
});

// ########################################################
// app.listen should be always at end of the file
app.listen(3000, () => {
  console.log("App running on  http://127.0.0.1:3000/");
});
