const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  product_name: String,
  price: String,
});

// compile model from schema
module.exports = mongoose.model("product", ProductSchema);