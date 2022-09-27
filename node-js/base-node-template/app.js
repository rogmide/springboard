const express = require("express");
const ExpressError = require("./expressError");
const usersRoutes = require("./routes/users");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", usersRoutes);

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
