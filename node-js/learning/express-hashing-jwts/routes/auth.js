const express = require("express");
const router = express.Router();
const db = require("../db");
const ExpressError = require("../expressError");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { BCRYPT_WORK_FACTOR, SECRET_KEY } = require("../config");
const { ensureLoggedIn, ensureAdmin } = require("../middleware/auth");

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
        const token = jwt.sign({ username, type: "admin" }, SECRET_KEY);
        return res.json({ msg: `Logged in!`, token: token });
      }
    }
    throw new ExpressError(`Invalid username/password!`, 400);
  } catch (error) {
    return next(error);
  }
});

router.get("/topsecret", ensureLoggedIn, (req, res, next) => {
  try {
    return res.json({ msg: "this is top secret" });
  } catch (error) {
    return next(new ExpressError(`First login!`, 401));
  }
});

router.get("/private", ensureLoggedIn, (req, res, next) => {
  try {
    res.json({ msg: `Welcome to my VIP section ${req.user.username}` });
  } catch (error) {
    return next();
  }
});

router.get("/adminhome", ensureAdmin, (req, res, next) => {
  try {
    res.json({ msg: `Admin dashboard welcome ${req.user.username}` });
  } catch (error) {
    return next();
  }
});

module.exports = router;
