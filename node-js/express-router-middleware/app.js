const express = require("express");
const ExpressError = require("./expressError");
const userRoute = require("./userRoutes");
const middleware = require("./middleware");
const morgan = require("morgan");

const app = express();

//########################################################
//This is middleware run after the request and before the response
//middleware has to be on the top if you want it to run before everything
// app.use(middleware.logger);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// ########################################################
// External middleware
app.use(morgan("dev"));

// ########################################################
// This will pre-fix route sample: /users /userRoute that are there
app.use("/users", userRoute);

// ########################################################
// middleware pas as a sec argument to the app.use to run before the route
app.use("/secret", middleware.checkPassword, (req, res, next) => {
  return res.send("I love you FOR Real Marry Me");
});

app.use("/private", middleware.checkPassword, (req, res) => {
  return res.send("THIS SECTION IS PRIVATE - BUT NOT TO YOU");
});

// ########################################################
// ERROR HANDELER 404
app.use((req, res, next) => {
  const e = new ExpressError("Page Not Found", 404);
  next(e);
});

app.use((err, req, res, next) => {
  let status = err.status || 500;
  let message = err.msg || "Default Msg";
  return res.status(status).json({ error: { message, status } });
});

module.exports = app;
