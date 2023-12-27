var express = require("express");
var router = express.Router();

router.get("/", (req, res) => {
  res.send("get request  for Products");
});

router.get("/get-products", (req, res) => {
  res.send("get request  for all Products");
});

router.post("/create-products", (req, res) => {
  res.send("Create Products");
});
router.put("/update-products", (req, res) => {
  res.send("Update Products");
});
router.delete("/delete-products", (req, res) => {
  res.send("Delete Products");
});

module.exports = router;
