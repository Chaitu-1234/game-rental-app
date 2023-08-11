const bcrypt = require("bcrypt");
const User = require("../models/User");
const { generateAuthToken } = require("../utils");

const authController = {
  async login(req, res) {
    const { username, password } = req.body;
    try {
      const user = await User.findOne({ username });
      if (!user) {
        return res.status(400).json({ message: "Invalid Login Credentials" });
      }
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        return res.status(400).json({ message: "Invalid Login Credentials" });
      }
      const token = generateAuthToken(user._id);
      return res
        .status(200)
        .json({ userId: user._id, message: "Login Successful", token });
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  },

  async register(req, res) {
    const {
      username,
      email,
      password,
      firstName,
      lastName,
      contactNumber,
      userType,
    } = req.body;
    try {
      const existingUser = await User.findOne({ username });
      if (existingUser) {
        return res.status(400).json({ message: "Username already exists" });
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({
        username,
        email,
        password: hashedPassword,
        firstName,
        lastName,
        contactNumber,
        userType,
      });
      await newUser.save();
      return res.status(200).json({ message: "Registration Successful" });
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  },
};

module.exports = authController;
