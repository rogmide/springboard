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
    return res.status(201).json(results.rows);
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
    return res.status(201).json(results.rows[0]);
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
