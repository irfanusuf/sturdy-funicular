const mongoose = require("mongoose");

const Product = mongoose.model(
  "Product",
  {
    name: { type: String },
    description: { type: String },
    price: { type: Number },
    Discount: { type: Number },
    productImgUrls: [{ type: String }],
    colors: [{ type: String }],
    sizes: [{ type: String }],
    isAvailable: { type: Boolean, default: true },
    isArchived: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = { Product };
