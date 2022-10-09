const express = require("express");
const app = express();
const ExpressError = require("./expressError");

// Node Js library - Nice to Use
// Passport is another one that is nice and i will look at it
const nunjucks = require("nunjucks");
const cookieParser = require("cookie-parser");
const moment = require("moment");
const validator = require("validator");

// Serving content to the public is to add css or anything that i need
app.use(express.static("public"));
app.use(express.static("js"));

// to parse cookies
app.use(cookieParser());

// Parse request bodies for JSON
app.use(express.json());

// Setting up view engine to HTML you dont have to add .html after every render("template")
app.set("view engine", "html");
nunjucks.configure("views", {
  autoescape: true,
  express: app,
});

app.get("/", (req, res, next) => {
  //Using moment is nice to work with dates
  let time = "12:11:00 10 9 22";
  let date = moment(time).fromNow();

  // Work with Validator
  let vEmail = validator.isEmail("roger@gmail.com");
  let vPhone = validator.isMobilePhone("8131234444");
  return res.render("index", { date, vEmail, vPhone });
});

app.get("/dogs/:name", (req, res, next) => {
  return res.render("dog", { name: req.params.name });
});

app.get("/showmecookies", (req, res, next) => {
  // Set a cookie to the browser
  res.cookie("isLoggedin", "definitely");
  return res.send(req.cookies);
});

/** 404 handler */

app.use(function (req, res, next) {
  const err = new ExpressError("Not Found", 404);

  // pass err to the next middleware
  return next(err);
});

/** general error handler */

app.use((err, req, res, next) => {
  res.status(err.status || 500);

  return res.json({
    error: err.message,
  });
});

app.listen(3000, function () {
  console.log("Server started on 3000");
});
