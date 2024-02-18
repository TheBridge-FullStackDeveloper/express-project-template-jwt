const express = require("express");
const router = express.Router();
const isAuthenticated = require("../middlewares/isAuthenticated");

router.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

module.exports = router;
