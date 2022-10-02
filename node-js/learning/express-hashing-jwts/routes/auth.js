const express = require("express");
const router = express.Router();
const db = require("../db");
const ExpressError = require("../expressError");

// ############################################
// GET /companies Get All Companies
router.get("/", async (req, res, next) => {
  try {
    res.send("API IS WORKING");
  } catch (error) {
    next(error);
  }
});

module.exports = router;
