const express = require("express");
const router = new express.Router();
const ExpressError = require("../expressError");
const jsonschema = require("jsonschema");
const bookSchema = require("../schemas/bookSchema");

// router.post("/", function (req, res, next) {
//   const bookData = req.body.book;

//   if (!bookData) {
//     let error = new ExpressError("Book data is required", 400);
//     return next(error);
//   }

//   return res.json(bookData);
// });

router.post("/", function (req, res, next) {
  // Validate req.body against our book schema:
  const result = jsonschema.validate(req.body, bookSchema);

  // If it's not valid...
  if (!result.valid) {
    //Collect all the errors in an array
    const listOfErrors = result.errors.map((e) => e.stack);
    const err = new ExpressError(listOfErrors, 400);
    return next(err);
  }

  // Do somehting is valid
  return res.json("THAT IS VALID!");
});

module.exports = router;
