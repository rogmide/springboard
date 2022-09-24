const express = require("express");
const router = express.Router();

const USER = [
  { id: 1, username: "Humingbird123" },
  { id: 2, username: "RevenMan" },
];

//#############################################
// Express req.params is what is coming in the URL as params
// Express req.body is what coming in the json req body

router.get("/", (req, res) => {
  res.json({ user: USER });
});

router.get("/:id", (req, res) => {
  const user = USER.find((u) => u.id === +req.params.id);
  res.json({ user });
});
module.exports = router;
