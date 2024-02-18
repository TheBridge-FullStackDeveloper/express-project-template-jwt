const express = require("express");
const isAuthenticated = require("../middlewares/isAuthenticated");
const passport = require("passport");
const router = express.Router();

router.use("/auth", require("./auth"));
router.use("/", require("./home"));
router.use("/profile", isAuthenticated, require("./profile"));

module.exports = router;
