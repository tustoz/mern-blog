const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const router = require("express").Router();

const User = require("../models/user");

// CREATE NEW USER
router.post("/register", async (req, res) => {
  const user = new User({
    profilepic: req.body.profilepic,
    username: req.body.username,
    email: req.body.email,
    password: await bcrypt.hash(req.body.password, 10),
  });
  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// LOGIN AUTHENTICATION
router.post("/login", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (user == null) {
    return res.status(400).send("Cannot find user");
  }
  try {
    if (bcrypt.compare(req.body.password, user.password)) {
      const token = generateToken(user);
      res
        .status(200)
        .json({
          id: user.id,
          username: user.username,
          email: user.email,
          accessToken: token,
        })
        .send("Login Success");
    } else {
      res.status(405).send("Not Allowed");
    }
  } catch {
    res.status(500).send();
  }
});

// GENERATE ACCESS TOKEN
function generateToken(user) {
  const payload = {
    username: user.username,
  };
  const options = {
    expiresIn: "1h",
  };
  const token = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, options);

  return token;
}

module.exports = router;
