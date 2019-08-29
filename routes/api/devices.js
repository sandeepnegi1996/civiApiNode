const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("this node api is working ");
});

router.get("/:id", (req, res) => {
  res.send(`this is the id ${req.params.id}`);
});

module.exports = router;
