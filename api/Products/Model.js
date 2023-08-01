const { Schema, model } = require('mongoose')

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true, 
  },
  brand: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Brand",
    required: true, 
  },
  thumbnail: {
    type: String,
    required: true,
  },
  imageArray: {
    type: [String],
    required: true,
  },
});

const Product = model("Product", productSchema);

module.exports = Product;