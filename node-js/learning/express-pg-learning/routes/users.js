const express = require("express");
const router = express.Router();
const db = require("../db");

router.get("/", async (req, res, next) => {
  try {
    const results = await db.query(`SELECT * FROM users`);
    return res.json(results.rows);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
