const express = require("express");
const router = express.Router();
const db = require("../db");
const ExpressError = require("../expressError");
const Dog = require("../models/dog");

// ############################################
// GET /dogs Get All dogs
router.get("/", async (req, res, next) => {
  try {
    const dogs = await Dog.getAll();
    dogs.forEach((d) => d.speak());
    return res.json(dogs);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const dog = await Dog.getById(req.params.id);
    return res.json(dog);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { name, age } = req.body;
    const dog = await Dog.create(name, age);
    return res.json(dog);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const dog = await Dog.getById(req.params.id);
    await dog.remove();
    return res.json({ msg: "Deleted!" });
  } catch (error) {
    next(error);
  }
});

router.patch("/:id/age", async (req, res, next) => {
  try {
    const dog = await Dog.getById(req.params.id);
    dog.age += 1;
    await dog.save();
    return res.json(dog);
  } catch (error) {
    next(error);
  }
});

router.patch("/:id/rename", async (req, res, next) => {
  try {
    const dog = await Dog.getById(req.params.id);
    dog.name = req.body.name;
    await dog.save();
    return res.json(dog);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
