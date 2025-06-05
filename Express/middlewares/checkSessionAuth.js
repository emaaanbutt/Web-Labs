async function checkSessionAuth(req, res, next) {
  if (!req.session.user) {
    req.flash("danger", "You need to login for this route");
    return res.redirect("/login");
  }
  next();
}

export default checkSessionAuth;