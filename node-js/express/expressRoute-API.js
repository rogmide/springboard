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
app.get("/candies", (req, res, next) => {
  // res.send(CANDIES);
  return res.json(CANDIES);
});

app.post("/candies", (req, res, next) => {
  try {
    if (req.body.name === "something")
      throw new ExpressError("Bad Candy Sorry", 403);
    CANDIES.push(req.body);
    res.status(201).json(CANDIES);
  } catch (err) {
    return next(err);
  }
});

app.use((req, res, next) => {
  const e = new ExpressError("Page Not Found", 404);
  next(e);
});

// ########################################################
// APP.USE WILL RUN BEFORE EVERYTHING YOU NED TO TELL THE ROUTE
// TO KEEP GOING WITH next();
// Only if everything on top dont RUN
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
