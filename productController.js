const Product = require("../models/Product");

const productController = {
  async getProductDetails(req, res) {
    const { productId } = req.params;
    try {
      const product = await Product.findById(productId);
      if (!product) {
        return res.status(404).json({ message: "Product Not Found" });
      }
      return res.status(200).json(product);
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  },
};

module.exports = productController;
