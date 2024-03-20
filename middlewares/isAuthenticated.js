const passport = require("passport");

function isAuthenticated(req, res, next) {
  passport.authenticate("jwt", { session: false }, (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(401);
    }
    next();
  })(req, res, next);
}

module.exports = isAuthenticated;
