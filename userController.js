const User = require("../models/User");

const userController = {
  async getUserDetails(req, res) {
    const { username } = req.params;
    try {
      const user = await User.findOne({ username });
      if (!user) {
        return res.status(404).json({ message: "User Not Found" });
      }
      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  },

  async updateUserDetails(req, res) {
    const { userId } = req.params;
    const updatedData = req.body;
    try {
      const user = await User.findByIdAndUpdate(userId, updatedData, {
        new: true,
      });
      if (!user) {
        return res.status(404).json({ message: "User Not Found" });
      }
      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  },
};

module.exports = userController;
