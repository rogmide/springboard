const express = require("express");
const router = express.Router();
const db = require("../db");
const ExpressError = require("../expressError");

// ############################################
// GET /cats Get All cats
router.get("/", async (req, res, next) => {
  try {
    // const cats = await Cat.getAll();
    // return res.json(cats);
  } catch (error) {
    next(error);
  }
});


module.exports = router;
