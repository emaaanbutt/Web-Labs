
export const isAuth = (req, res, next) => {
  if (req.session.user) {
    next();
  } else {
    res.redirect("/login?alert=1"); 
  }
};

export const isAdmin = (req, res, next) => {
  if (req.session.user && req.session.user.role === "admin") {
    next();
  } else {
    res.status(403).send("Access denied. Admins only.");
  }
};
