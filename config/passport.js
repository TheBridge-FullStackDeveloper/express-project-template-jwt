// config/passport.js
const LocalStrategy = require("passport-local").Strategy;
const passport = require("passport");
const prisma = require("../prisma");
const bcrypt = require("bcrypt");
const { cookieExtractor } = require("../utils/cookieExtractor");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;

require("dotenv").config();

const opts = {
  jwtFromRequest: cookieExtractor,
  secretOrKey: process.env.JWT_SECRET,
};

passport.use(
  new JwtStrategy(opts, async function (jwt_payload, done) {
    try {
      const user = await prisma.user.findUnique({
        where: { email: jwt_payload.sub },
      });
      if (user) {
        return done(null, user);
      } else {
        return done(null, false, { message: "User not found" });
      }
    } catch (error) {
      return done(error);
    }
  })
);
