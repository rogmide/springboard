const express = require("express");

const app = express();

// ########################################################
// ROUTES DECLARATION LIKE LIKE FLASK
app.get("/", (req, res) => {
  console.log("Dogs do Something");
  return res.send([1, 2, 3]);
});

app.get("/dogs", (req, res) => {
  console.log("Dogs do Something");
  return res.send("<h1>SOmething</h1>");
});

// ########################################################
// SAME ROUTE PATH - BUT IS APP.GET - APP.POST APP.PATCH ETC...
app.get("/chickens", (req, res) => {
  res.send("BOCK! BOCK! BOCK! - GET REQUEST");
});

app.post("/chickens", (req, res) => {
  res.send("you create a new chickent - POST REQUEST");
});

// ########################################################
// app.listen should be always at end of the file
app.listen(3000, () => {
  console.log("App running on  http://127.0.0.1:3000/");
});
