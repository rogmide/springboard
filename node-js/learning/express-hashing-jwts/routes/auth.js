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
    // ######################################
    // 23505 code for duplicate key in the db
    if (error.code === "23505")
      return next(
        new ExpressError(`Username is already taken, Please pick another!`, 400)
      );
    return next(error);
  }
});

router.post("/login", async (req, res, next) => {
  try {
    const { username, password } = req.body;
    if (!username || !password)
      throw new ExpressError(`Username and password require`, 400);

    const results = await db.query(
      `
    select username, password
    from users
    where username = $1
    `,
      [username]
    );

    const user = results.rows[0];
    if (user) {
      if (await bcrypt.compare(password, user.password)) {
        return res.json({ msg: `Logged in!` });
      }
    }
    throw new ExpressError(`Invalid username/password!`, 404);
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
