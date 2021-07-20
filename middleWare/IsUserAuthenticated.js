const isAuthenticated = (req, res, next) => {
  if (req.session.user) {
    return next();
  } else {
    res.status(401).send("Unauthorized access!");
  }
};
module.exports = isAuthenticated;
