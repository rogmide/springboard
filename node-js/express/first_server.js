const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ########################################################
// ROUTES DECLARATION LIKE LIKE FLASK
app.get("/", (req, res) => {
  console.log("Dogs do Something");
  return res.send('index.html');
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

const greetings = {
  en: "hello",
  fr: "bonjour",
  ic: "hall'o",
  js: "konnichiwa",
};

// ########################################################
// REQUEST OBJ REQ.PARAMS."NAME OF THE PARAM"
app.get("/greet/:language", (req, res) => {
  const lang = req.params.language;
  const greet = greetings[lang];
  if (!greet) return res.send("not a language");
  res.send(greet);
});

// ########################################################
// REQUEST OBJ REQ.QUERY
app.get("/search", (req, res) => {
  const { item = "0", item2 = "0" } = req.query;
  return res.send(`SEARCH PAGE! Item is: ${item} and Item2: ${item2}`);
});

// ########################################################
// REQUEST REQ.rawHeaders
app.get("/show-me-headers", (req, res) => {
  //   res.send(req.rawHeaders)
  res.send(req.headers);
});

app.get("/show-language", (req, res) => {
  const lang = req.headers["accept-language"];
  res.send(lang);
});

// ########################################################
// REQUEST REQ.BODY
app.post("/register", (req, res) => {
  res.send("Welcome To My World: " + req.body.username);
});

// ########################################################
// app.listen should be always at end of the file
app.listen(3000, () => {
  console.log("App running on  http://127.0.0.1:3000/");
});
