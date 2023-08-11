const express = require("express");
const orderController = require("../controllers/orderController");

const router = express.Router();

router.post("/place-order", orderController.placeOrder);
router.get("/order-history/:userId", orderController.getOrderHistory);

module.exports = router;
