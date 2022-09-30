const express = require("express");
const router = express.Router();
const db = require("../db");
const ExpressError = require("../expressError");
const Cat = require("../models/cat");

// ############################################
// GET /cats Get All cats
router.get("/", async (req, res, next) => {
  try {
    const cats = await Cat.getAll();
    return res.json(cats);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const cat = await Cat.getById(req.params.id);
    return res.json(cat);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { name, age } = req.body;
    const cat = await Cat.create(name, age);
    return res.json(cat);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const cat = await Cat.delete(req.params.id);
    return res.json({ msg: "Deleted!" });
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const { name, age } = req.body;
    const cat = await Cat.update(req.params.id, name, age);
    return res.json(cat);
  } catch (error) {
    next(error);
  }
});

router.patch("/:id", async (req, res, next) => {
  try {
    const cat = await Cat.makeOlder(req.params.id);
    return res.json(cat);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
