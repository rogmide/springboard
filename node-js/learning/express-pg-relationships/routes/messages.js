const express = require("express");
const router = express.Router();
const db = require("../db");

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
    let msg = msgResults.rows[0];
    msg.tags = tagsREsults.rows.map((r) => r.tag);
    return res.send(msg);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
