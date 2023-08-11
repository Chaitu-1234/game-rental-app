const Product = require("../models/Product");

const sellerController = {
  async createProduct(req, res) {
    const productData = req.body;
    try {
      const newProduct = new Product(productData);
      await newProduct.save();
      return res.status(200).json(newProduct);
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  },

  async updateProduct(req, res) {
    const { productId } = req.params;
    const updatedData = req.body;
    try {
      const product = await Product.findByIdAndUpdate(productId, updatedData, {
        new: true,
      });
      if (!product) {
        return res.status(404).json({ message: "Product Not Found" });
      }
      return res.status(200).json(product);
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  },
};

module.exports = sellerController;
