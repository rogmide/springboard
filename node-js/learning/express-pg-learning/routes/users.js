const express = require("express");
const router = express.Router();
const db = require("../db");
const ExpressError = require("../expressError");

router.get("/", async (req, res, next) => {
  try {
    const results = await db.query(`SELECT * FROM users`);
    return res.json({ users: results.rows });
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const results = await db.query(`select * from users where id=$1`, [id]);
    if (results.rows.length === 0) {
      throw new ExpressError(`Can't find user with id of ${id}`, 404);
    }
    return res.json({ user: results.rows[0] });
  } catch (error) {
    console.log("Here");
    next(error);
  }
});

router.get("/search", async (req, res, next) => {
  try {
    const { type } = req.query;
    //##################################################
    // type=$1`, [type] super importan $1 represent the variable that is pass on [type]
    // more sample type=$1 + $2 - $3, [num1, num2, num3]
    const result = await db.query(`select * from users where type=$1`, [type]);
    return res.json(result.rows);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { name, type } = req.body;
    const results = await db.query(
      "insert into users (name, type) values ($1, $2) returning *",
      [name, type]
    );
    return res.status(201).json({ user: results.rows[0] });
  } catch (error) {
    next(error);
  }
});

router.patch("/:id", async (req, res, next) => {
  try {
    const { name, type } = req.body;
    const id = req.params.id;

    const results = await db.query(
      "update users set name=$1, type=$2 where id=$3 returning *",
      [name, type, id]
    );
    if (results.rows.length === 0) {
      throw new ExpressError(`Can't find user with id of ${id}`, 404);
    }
    return res.status(200).json({ user: results.rows[0] });
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const results = await db.query("delete from users where id= $1", [id]);
    return res.send({ msg: "Deleted!" });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
