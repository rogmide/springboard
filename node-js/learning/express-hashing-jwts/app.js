const express = require("express");
const ExpressError = require("./expressError");
const authRoutes = require("./routes/auth");
const app = express();
const { authenticateJTW } = require("./middleware/auth");

app.use(express.json());
// app.use(authenticateJTW); HAS TO RUN BEFORE ANY ROUTE
app.use(authenticateJTW);

// ROUTES
app.use("/", authRoutes);

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
    message: err.message,
  });
});

module.exports = app;
