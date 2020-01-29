const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  seller: {
    _id: String,
    name: String,
  },
  product_name: String,
  price: String,
  description: String,
  imageURL: String,
});

// compile model from schema
module.exports = mongoose.model("product", ProductSchema);