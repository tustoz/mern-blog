const router = require("express").Router()
const mongoose = require("mongoose")
const bcrypt = require("bcrypt");

const User = require("../models/user")
const Post = require("../models/post")

router.get("/:id", getUser, (req, res) => {
  res.status(200).json(res.user);
});

router.put("/:id", getUser, async (req, res) => {
  if (req.body.profilepic != null) {
    res.user.profilepic = req.body.profilepic;
  }
  if (req.body.username != null) {
    res.user.username = req.body.username;
  }
  if (req.body.email != null) {
    res.user.email = req.body.email;
  }
  if (req.body.password != null) {
    res.user.password = await bcrypt.hash(req.body.password, 10);
  }
  try {
    const updatedUser = await res.user.save();
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete("/:id", getUser, async (req, res) => {
  try {
    await Post.deleteMany({ username: user.username });
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "user was deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getUser(req, res, next) {
  let user;

  try {
    user = await User.findById(req.params.id);
    if (user == null) {
      return res.status(404).json({ message: `can't find user data` });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.user = user;
  next();
}

module.exports = router;
