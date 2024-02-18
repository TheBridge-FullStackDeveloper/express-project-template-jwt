function isAdmin(req, res, next) {
  if (req.user.isAdmin) {
    next();
  } else {
    res.redirect('/');
  }
}

module.exports = isAdmin;
