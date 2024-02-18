const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

const prisma = require("../prisma");
const { cookieExtractor } = require("../utils/cookieExtractor");

router.get("/", async (req, res) => {
  try {
    const token = cookieExtractor(req);
    const decoded = jwt.decode(token);

    const user = await prisma.user.findMany({
      where: {
        email: decoded.sub,
      },
    });

    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
