const express = require("express");
const router = express.Router();
const db = require("../db");
const ExpressError = require("../expressError");

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const msgResults = await db.query(
      ` select id, msg
        from messages
        where id=$1
        `,
      [id]
    );
    const tagsREsults = await db.query(
      ` SELECT m.id, m.msg, t.tag
        from messages as m
        left join messages_tags as mt 
        on m.id = mt.message_id
        LEFT join tags as t
        on mt.tag_code = t.code
        where m.id = $1
        `,
      [id]
    );
    if (tagsREsults.rows.length === 0) {
      throw new ExpressError(`Message not found with id: ${id}`, 404);
    }
    let msg = msgResults.rows[0];
    msg.tags = tagsREsults.rows.map((r) => r.tag);
    return res.send(msg);
  } catch (error) {
    next(error);
  }
});

router.patch("/:id", async (req, res, next) => {
  try {
    const { msg } = req.body;
    const id = req.params.id;

    const results = await db.query(
      "update messages set msg=$1 where id=$2 returning *",
      [msg, id]
    );
    if (results.rows.length === 0) {
      throw new ExpressError(`Can't find msg with id of ${id}`, 404);
    }
    return res.send(results.rows[0]);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
