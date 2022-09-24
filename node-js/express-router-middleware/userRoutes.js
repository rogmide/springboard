const express = require("express");
const router = express.Router();

const USER = [
  { id: 1, username: "Humingbird123" },
  { id: 2, username: "RevenMan" },
];

router.get("/", (req, res) => {
  res.json({ user: USER });
});

router.get("/:id", (req, res) => {
  const user = USER.find((u) => u.id === +req.params.id);
  res.json({ user });
});
module.exports = router;
