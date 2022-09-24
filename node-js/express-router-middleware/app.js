const express = require("express");
const ExpressError = require("./expressError");
const userRoute = require("./userRoutes");

const app = express();

function logger(req, res, next) {
  console.log(`Receiveda ${req.method} request to ${req.path}`);
  return next();
}

app.use(logger);

// ########################################################
// This will pre-fix route sample: /users /userRoute that are there
app.use("/users", userRoute);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

// ########################################################
// app.listen should be always at end of the file
app.listen(3000, () => {
  console.log("App running on  http://127.0.0.1:3000/");
});
