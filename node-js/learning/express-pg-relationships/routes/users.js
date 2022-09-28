const express = require("express");
const router = express.Router();
const db = require("../db");

router.get("/", async (req, res) => {
  try {
    const results = await db.query(
      `SELECT * 
       FROM users
      `
    );
    return res.json(results.rows);
  } catch (error) {
    next(error);
  }
});

// #############################################
// One to Many Relationships
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const userResults = await db.query(
      `select name, type
       from users
       where id=$1
      `,
      [id]
    );
    const msgResults = await db.query(
      `select id, msg
       from messages
       where user_id=$1
      `,
      [id]
    );
    const user = userResults.rows[0];
    user.messages = msgResults.rows;
    return res.json(user);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
