/** BizTime express application. */

const express = require("express");
const ExpressError = require("./expressError");
const catsRoutes = require("./routes/cats");
const dogsRoutes = require("./routes/dogs");

const app = express();

app.use(express.json());

app.use("/cats", catsRoutes);
app.use("/dogs", dogsRoutes);

/** 404 handler */

app.use(function (req, res, next) {
  const err = new ExpressError("Not Found", 404);
  return next(err);
});

/** general error handler */

app.use((err, req, res, next) => {
  res.status(err.status || 500);

  return res.json({
    error: err,
    // message: err.message,
  });
});

module.exports = app;
