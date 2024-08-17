const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Admin = require("../models/Admin");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Registration Route
router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  // Check if all fields are provided
  if (!username || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    // Check if the user already exists
    const emailExist = await User.findOne({ email });
    if (emailExist) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user
    const user = new User({
      username,
      email,
      password: hashedPassword,
      role: "user", // Assuming you're setting role as user here
    });

    const savedUser = await user.save();
    res
      .status(201)
      .json({ user: savedUser._id, message: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error. Please try again later." });
  }
});

// Login Route
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    // Check if the user exists in the User collection
    let user = await User.findOne({ username });

    // If not found in User collection, check in Admin collection
    if (!user) {
      user = await Admin.findOne({ username });
    }

    if (!user) {
      return res
        .status(400)
        .json({ message: "Username or password is incorrect" });
    }

    // Check if the password is correct
    const validPass = await bcrypt.compare(password, user.password);
    if (!validPass) {
      return res
        .status(400)
        .json({ message: "Username or password is incorrect" });
    }

    // Create and assign a token
    const token = jwt.sign(
      { _id: user._id, role: user.role },
      process.env.TOKEN_SECRET,
      {
        expiresIn: "1h",
      }
    );

    res.cookie("authToken", token, { httpOnly: true, sameSite: "Strict" });
    res.status(200).json({ user: user._id, role: user.role });
  } catch (err) {
    res.status(500).json({ message: "Server error. Please try again later." });
  }
});

// Logout Route
router.get("/logout", (req, res) => {
  res.clearCookie("authToken"); // Clear the auth token cookie
  res.status(200).json({ logout: true });
});

module.exports = router;
