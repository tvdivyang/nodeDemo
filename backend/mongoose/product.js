const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  Name: String,
  price: Number,
  qty: Number,
});

module.exports = mongoose.model("product", productSchema);
