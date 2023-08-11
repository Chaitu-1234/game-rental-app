const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  thumbnailURL: { type: String, required: true },
  sellerUsername: { type: String, required: true },
  unitsAvailable: { type: Number, required: true },
  productType: {
    type: String,
    enum: ["game", "controller", "console"],
    required: true,
  },
  productImages: [{ type: String }],
  rentalPricePerWeek: { type: Number, required: true },
  rentalPricePerMonth: { type: Number, required: true },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
