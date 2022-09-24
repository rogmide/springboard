const express = require("express");
const router = express.Router();
const items = require("../fakeDb");
const ExpressError = require("../expressError");

// ############################
// GET THE ITEMS FROM FAKEDB
router.get("/", (req, res) => {
  return res.json({ items: items });
});

// ############################
// ADD ITEMS TO FAKEDB
router.post("/", (req, res) => {
  const newItem = { name: req.body.name, price: req.body.price };
  items.push(newItem);
  console.log(items);
  return res.status(201).json({ added: newItem });
});

// ############################
// GET ITEMS BY NAME FROM FAKEDB
router.get("/:name", function (req, res) {
  const item = items.find((item) => item.name === req.params.name);
  if (item !== undefined) {
    return res.json({ item: item });
  } else {
    throw new ExpressError("Item Not Found", 404);
  }
});

// ############################
// UPDATE A ITEMS BY NAME ON FAKEDB
router.patch("/:name", function (req, res) {
  const item = items.find((item) => item.name === req.params.name);
  if (item !== undefined) {
    item.name = req.body.name;
    return res.json({ updated: item });
  } else {
    throw new ExpressError("Item Not Found", 404);
  }
});

// ############################
// DELETE A ITEMS BY NAME ON FAKEDB
router.delete("/:name", function (req, res) {
  const item_index = items.findIndex((item) => item.name === req.params.name);
  if (item_index !== -1) {
    items.splice(item_index, 1);
    return res.json({ message: "Deleted" });
  } else {
    throw new ExpressError("Item Not Found", 404);
  }
});

module.exports = router;
