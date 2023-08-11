const Order = require("../models/Order");
const Product = require("../models/Product");

const orderController = {
  async placeOrder(req, res) {
    const { userId } = req.body;
    try {
      // Get user's cart contents and calculate total price
      // Create an order entry and update product quantities
      // Clear user's cart
      return res.status(200).json({ message: "Order Placed Successfully" });
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  },

  async getOrderHistory(req, res) {
    const { userId } = req.params;
    try {
      const orders = await Order.find({ userId });
      return res.status(200).json(orders);
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  },
};

module.exports = orderController;
