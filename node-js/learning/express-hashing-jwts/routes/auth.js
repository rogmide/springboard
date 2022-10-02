const express = require("express");
const router = express.Router();
const db = require("../db");
const ExpressError = require("../expressError");
const bcrypt = require("bcrypt");
const { BCRYPT_WORK_FACTOR } = require("../config");

router.get("/", async (req, res, next) => {
  try {
    res.send("API IS WORKING");
  } catch (error) {
    next(error);
  }
});

router.post("/register", async (req, res, next) => {
  try {
    const { username, password } = req.body;
    if (!username || !password)
      throw new ExpressError(`Username and password require`, 400);

    const hashpwd = await bcrypt.hash(password, BCRYPT_WORK_FACTOR);
    const results = await db.query(
      `
    insert into users (username, password)
    values ($1, $2)
    returning username
    `,
      [username, hashpwd]
    );
    return res.json(results.rows[0]);
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
