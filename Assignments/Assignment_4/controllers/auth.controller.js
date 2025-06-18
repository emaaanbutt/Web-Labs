import bcrypt from "bcrypt";
import User from "../models/users.model.js";

export const getRegister = (req, res) => {
  res.render("register", { layout: false, exists: null });
};

export const postRegister = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).send("Please fill all fields");
    }

    const existing = await User.findOne({ email });

    if (existing) {
      return res.render("register", {
        layout: false,
        exists: "User already exists!",
      });
    }

    const hashed = await bcrypt.hash(password, 10);

    const user = new User({
      name,
      email,
      password: hashed,
      role: "user",
    });

    await user.save();
    res.redirect("/login");
  } catch (err) {
    console.error("❌ Error in register:", err);
    res.status(500).send("Server error");
  }
};

export const getLogin = (req, res) => {
  res.render("login", { layout: false, error: null });
};

export const postLogin = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email: email.toLowerCase() });
  const valid = user && (await bcrypt.compare(password, user.password));

  if (!valid) {
    return res.render("login", {
      layout: false,
      error: "Invalid email or password",
      query: {}
    });
  }

  req.session.user = {
    _id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
  };

  if (user.role === "admin") {
    res.redirect("/");
  } else {
    res.redirect("/");
  }
};

export const logout = (req, res) => {
  req.session.destroy(() => {
    res.redirect("/login");
  });
};
