const express = require("express");
const sellerController = require("../controllers/sellerController");

const router = express.Router();

router.post("/create-product", sellerController.createProduct);
router.put("/update-product/:productId", sellerController.updateProduct);

module.exports = router;
