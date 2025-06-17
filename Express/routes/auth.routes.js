import express from "express";
import {
  getRegister,
  postRegister,
  getLogin,
  postLogin,
} from "../controllers/auth.controller.js";

const router = express.Router();

router.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).send('Logout failed');
    }
    res.redirect('/login');
  });
});


router.get("/register", getRegister);
router.post("/register", postRegister);

router.get("/login", (req, res) => {
  res.render("login", {
    layout: false,
    error: null,
    query: req.query //
  });
});
router.post("/login", postLogin);

export default router;
